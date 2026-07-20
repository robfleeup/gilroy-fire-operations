# Gilroy Fire Operations — Version 3

This repository preserves the existing live operations dashboard and adds a dedicated 2025 Annual Performance Report viewer.

## Main routes

- `/` — Live operations dashboard
- `/annual-report` — Interactive 28-slide annual report
- `/health` — Render health check

## Annual report features

- Full-screen mode
- Previous/next controls
- Keyboard navigation
- Touch swipe and mouse-wheel navigation
- Chapter menu
- Slide progress control
- Printable PDF

## Render

Build command: `pip install -r requirements.txt`

Start command: `gunicorn app:app --bind 0.0.0.0:$PORT --workers 1 --timeout 60`

Health check path: `/health`

## Deployment safety

Deploy this as a new Render service or branch first. Verify the live dashboard and annual report before switching the existing public service.
