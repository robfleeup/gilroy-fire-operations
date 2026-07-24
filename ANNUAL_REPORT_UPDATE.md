# Annual Report PDF Update

This version uses one PDF file instead of separate slide images.

## File used by the dashboard

`static/reports/Gilroy-Fire-2025-Annual-Performance-Report.pdf`

## To update the report in the future

1. Rename the replacement PDF exactly:
   `Gilroy-Fire-2025-Annual-Performance-Report.pdf`
2. Upload it into `static/reports/` and replace the existing file.
3. Commit the change in GitHub.
4. Render should redeploy automatically.

The `/annual-report` page embeds the PDF and also provides **Open Full Screen** and **Download PDF** buttons. No slide images or viewer JavaScript are required.
