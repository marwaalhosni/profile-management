# Profile Management Starter (Frontend + Backend)

This is a **simple, human-written** starter you can run locally. It includes:
- **Backend**: Node.js + Express (`server/`)
- **Frontend**: Plain HTML + CSS + JS (`client/`)

---

## 1) Prerequisites
- Install **Node.js (LTS)** on your machine.
- Verify in a terminal:
  ```bash
  node -v
  npm -v
  ```

## 2) Get the project
1. Unzip the folder.
2. Open it in VS Code (or any editor).

Project structure:
```
profile-management/
  server/
    server.js
    package.json
  client/
    profile.html
  README.md
```

## 3) Run the backend
Open a terminal in the `server/` folder and run:
```bash
npm install
npm start
```
You should see:
```
✅ Server running at http://localhost:5000
```

## 4) Open the frontend
- Method A (quick): Double-click `client/profile.html` to open in your browser.
- Method B (recommended): Use VS Code **Live Server** extension to serve the `client/` folder over HTTP.

> The page expects the backend at `http://localhost:5000`.

## 5) Try it out
- The form loads your current profile from the server.
- Edit fields and click **Save Profile**.
- You should see a success alert. The server terminal will log the updated data.

## 6) Notes
- Data is stored **in-memory** on the server. Restarting the server resets it.
- This is intentionally simple and readable—like code written by a human.
- If you want persistence later, you can write to a JSON file or use a small DB (e.g., SQLite).

## 7) Troubleshooting
- **CORS / Network issues**: Make sure the server is started **before** opening the page.
- **Port in use**: If `5000` is busy, change the port in `server.js` and the URL in `profile.html`.
- **Antivirus/Firewall**: Sometimes blocks localhost. Temporarily allow Node.js if prompted.

Enjoy! 🙌
