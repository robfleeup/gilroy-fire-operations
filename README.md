# Gilroy Fire Performance & Operations Center

A public-facing Gilroy Fire Department site with independent sections for:

- 2025 performance dashboard
- Current public incidents
- 2025 incident heat map
- About GFD
- 2025 annual performance report

The live incident feed is isolated from the annual and static content. A live-feed failure does not take down the rest of the site.

## Run locally

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open `http://localhost:10000`.

## Update annual dashboard data

Replace `static/data/summary.json` while preserving the existing field names and structure.

## Update the annual report

Replace `static/Gilroy-Fire-2025-Annual-Performance-Report.pdf`. Update the displayed year in the templates when a new report is published.

## Update images

Replace files in `static/images/` while preserving filenames, or update the matching image paths in the templates.

## Live incident feed

Set these environment variables in Render:

```text
PULSEPOINT_URL=https://ourgilroy.com/api/fire.php?view=incidents
FALLBACK_URL=https://api.pulsepoint.org/v1/webapp?resource=incidents&agencyid=43010
```

## Deployment

See `DEPLOY_TO_GITHUB.md` for the safe replacement process using the existing repository.
