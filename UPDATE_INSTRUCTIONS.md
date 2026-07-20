# Update the live Render site

1. Unzip this package.
2. Open the GitHub repository `robfleeup/gilroy-fire-dashboard`.
3. Choose **Add file → Upload files**.
4. Drag all files and folders from this package into GitHub.
5. Allow matching files to be replaced.
6. Commit changes to the `main` branch.
7. Render will automatically redeploy.
8. Wait for **Deploy live**, then refresh the public URL.

Required folders:
- `static`
- `templates`

Required root files:
- `app.py`
- `render.yaml`
- `requirements.txt`
