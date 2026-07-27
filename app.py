from __future__ import annotations

import json
import os
import re
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

from flask import Flask, jsonify, send_from_directory

APP = Flask(__name__)
app = APP

BASE_DIR = Path(__file__).resolve().parent
LAT, LON = 37.0058, -121.5683

PULSEPOINT_URL = os.getenv(
    "PULSEPOINT_URL",
    "https://ourgilroy.com/api/fire.php?view=incidents",
)
FALLBACK_URL = os.getenv(
    "FALLBACK_URL",
    "https://ourgilroy.com/api/fire.php?view=incidents",
)


def fetch_json(url: str, timeout: int = 12):
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "GilroyFireDashboard/2.0",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def load_local_json(*filenames: str):
    for filename in filenames:
        path = BASE_DIR / filename
        if path.exists():
            return json.loads(path.read_text(encoding="utf-8"))
    return {}


def parse_incidents(payload):
    rows = []

    if isinstance(payload, list):
        rows = payload
    elif isinstance(payload, dict):
        for key in ("incidents", "Incidents", "items", "data", "results"):
            value = payload.get(key)
            if isinstance(value, list):
                rows = value
                break

        if not rows:
            for value in payload.values():
                if isinstance(value, list) and value and isinstance(value[0], dict):
                    rows = value
                    break

    result = []

    for row in rows:
        if not isinstance(row, dict):
            continue

        incident_type = (
            row.get("type")
            or row.get("IncidentType")
            or row.get("CallType")
            or row.get("dispatch_type")
            or "Incident"
        )
        address = (
            row.get("address")
            or row.get("FullDisplayAddress")
            or row.get("Address")
            or row.get("location")
            or "Location unavailable"
        )
        units = row.get("units") or row.get("Unit") or row.get("Units") or []

        if isinstance(units, str):
            units = [u.strip() for u in re.split(r"[,; ]+", units) if u.strip()]

        received = (
            row.get("received_at")
            or row.get("CallReceivedDateTime")
            or row.get("DateTime")
            or row.get("timestamp")
        )
        status = str(row.get("status") or row.get("Status") or "").lower()
        active = bool(row.get("is_active")) or status in {
            "active",
            "open",
            "dispatched",
            "enroute",
            "on scene",
        }

        result.append(
            {
                "id": str(
                    row.get("id")
                    or row.get("IncidentID")
                    or row.get("IncidentId")
                    or ""
                ),
                "type": str(incident_type),
                "address": str(address),
                "units": units,
                "received_at": received,
                "is_active": active,
            }
        )

    return result


def live_incidents():
    errors = []

    for source, url in (
        ("PulsePoint", PULSEPOINT_URL),
        ("OurGilroy public incident feed", FALLBACK_URL),
    ):
        try:
            incidents = parse_incidents(fetch_json(url))
            if incidents:
                return incidents, source, None
            errors.append(f"{source}: no incidents returned")
        except Exception as exc:
            errors.append(f"{source}: {exc}")

    return [], "Unavailable", "; ".join(errors)


# Public pages stored beside app.py

@APP.get("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")


@APP.get("/annual-report")
def annual_report():
    return send_from_directory(BASE_DIR, "annual-report.html")


@APP.get("/about")
def about():
    return send_from_directory(BASE_DIR, "about.html")


@APP.get("/incident-map")
def incident_map():
    incident_map_file = BASE_DIR / "incident-map.html"
    if incident_map_file.exists():
        return send_from_directory(BASE_DIR, "incident-map.html")
    return (
        "The incident map file has not been uploaded yet. "
        "Upload incident-map.html beside app.py.",
        404,
    )


@APP.get("/aid-map")
def aid_map():
    aid_map_file = BASE_DIR / "aid-map.html"
    if aid_map_file.exists():
        return send_from_directory(BASE_DIR, "aid-map.html")
    return (
        "The regional aid map file has not been uploaded yet. "
        "Upload aid-map.html beside app.py.",
        404,
    )


@APP.get("/annual-report-pdf")
def annual_report_pdf():
    return send_from_directory(
        BASE_DIR,
        "Gilroy-Fire-2025-Annual-Performance-Report.pdf",
    )


# Root-level CSS, JS, images, PDFs, and JSON files

@APP.get("/<path:filename>")
def public_file(filename: str):
    return send_from_directory(BASE_DIR, filename)


# Data endpoints

@APP.get("/health")
def health():
    return jsonify(
        {
            "status": "ok",
            "time": datetime.now(timezone.utc).isoformat(),
        }
    )


@APP.get("/api/historical")
@APP.get("/api/firstdue-snapshot")
def historical():
    return jsonify(load_local_json("firstdue-2026.json", "firstdue.json"))


@APP.get("/api/manual-metrics")
def manual_metrics():
    return jsonify(load_local_json("manual_metrics.json"))


@APP.get("/api/live")
@APP.get("/api/current-operations")
def live():
    rows, source, error = live_incidents()
    today = datetime.now().astimezone().date()

    def is_today(value):
        if not value:
            return True
        try:
            return (
                datetime.fromisoformat(str(value).replace("Z", "+00:00"))
                .astimezone()
                .date()
                == today
            )
        except Exception:
            return True

    todays = [row for row in rows if is_today(row.get("received_at"))]
    active = [row for row in rows if row.get("is_active")]
    ems = [
        row
        for row in todays
        if re.search(
            r"medical|ems|cardiac|breathing|injury|sick|fall",
            row.get("type", ""),
            re.I,
        )
    ]

    unit_ids = sorted(
        {
            unit.upper()
            for row in active
            for unit in row.get("units", [])
            if re.match(r"^(E|T|RM|B)\d+", unit.upper())
        }
    )

    return jsonify(
        {
            "available": bool(rows),
            "source": source,
            "error": error,
            "updated_at": datetime.now(timezone.utc).isoformat(),
            "incidents_today": len(todays),
            "active_incidents": len(active),
            "ems_today": len(ems),
            "fire_other_today": max(0, len(todays) - len(ems)),
            "gilroy_units_committed": len(unit_ids),
            "gilroy_unit_ids": unit_ids,
            "recent": todays[:10],
        }
    )


@APP.get("/api/weather")
def weather():
    try:
        points = fetch_json(f"https://api.weather.gov/points/{LAT},{LON}")
        properties = points["properties"]
        period = fetch_json(properties["forecastHourly"])["properties"]["periods"][0]

        return jsonify(
            {
                "available": True,
                "temperature_f": period.get("temperature"),
                "description": period.get("shortForecast"),
                "wind_mph": period.get("windSpeed"),
                "wind_direction": period.get("windDirection"),
                "humidity": (period.get("relativeHumidity") or {}).get("value"),
                "probability": (
                    period.get("probabilityOfPrecipitation") or {}
                ).get("value"),
                "observed_at": period.get("startTime"),
            }
        )
    except Exception as exc:
        return jsonify({"available": False, "error": str(exc)})


@APP.get("/api/alerts")
def alerts():
    try:
        payload = fetch_json(
            f"https://api.weather.gov/alerts/active?point={LAT},{LON}"
        )
        items = [
            {
                "event": feature.get("properties", {}).get("event"),
                "headline": feature.get("properties", {}).get("headline"),
            }
            for feature in payload.get("features", [])
        ]
        return jsonify(
            {
                "available": True,
                "count": len(items),
                "alerts": items,
            }
        )
    except Exception as exc:
        return jsonify(
            {
                "available": False,
                "count": 0,
                "alerts": [],
                "error": str(exc),
            }
        )


if __name__ == "__main__":
    APP.run(
        host="0.0.0.0",
        port=int(os.getenv("PORT", "10000")),
        debug=False,
    )
