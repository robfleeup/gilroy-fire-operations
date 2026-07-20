# Live Data Setup

The application is ready to calculate live:

- Unique incidents
- Total unit responses
- Engine responses
- Truck responses
- Rescue Medic responses
- Chief Officer responses (`B` units)
- ALS ambulance responses (`M` units)
- BLS ambulance responses (`A` units)
- Individual unit totals for today, month-to-date, and year-to-date

## Supported connection methods

### Method A — Authorized JSON feed

In Render, add:

- `INCIDENT_FEED_URL`
- `INCIDENT_FEED_TOKEN` if the source requires a bearer token

The browser calls `/api/sync` every 60 seconds. The server retrieves the authorized JSON feed and stores new incidents.

The adapter accepts common field names such as:

- `incident_id`, `id`, `IncidentID`, `CallNumber`
- `received_at`, `timestamp`, `CallReceivedDateTime`
- `incident_type`, `call_type`, `IncidentType`
- `address`, `location`, `FullDisplayAddress`
- `units`, `UnitList`, `assigned_units`

### Method B — Push records into the dashboard

Another authorized system can POST JSON to:

`/api/ingest`

Header:

`X-Ingest-Secret: <the Render INGEST_SECRET value>`

Example:

```json
{
  "incidents": [
    {
      "incident_id": "GFD-2026-000123",
      "received_at": "2026-07-15T14:20:00-07:00",
      "incident_type": "Medical Emergency",
      "address": "Monterey Road",
      "status": "active",
      "units": ["E47", "B47", "M53", "A76"]
    }
  ]
}
```

That one incident creates:

- 1 incident
- 4 unit responses
- 1 engine response
- 1 chief response
- 1 ALS ambulance response
- 1 BLS ambulance response

## PulsePoint status

Do not place an undocumented or protected PulsePoint endpoint into `INCIDENT_FEED_URL`. Use the field only after PulsePoint provides written authorization and the supported feed details.
