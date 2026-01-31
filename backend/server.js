import http from "http";
import db from "./database.js";

const PORT = 5000;

const server = http.createServer((req, res) => {
    // Allow frontend (CORS)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

    // Handle preflight
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    // 🎯 ROUTE: POST /api/mail/send
    if (req.method === "POST" && req.url === "/api/mail/send") {
        let body = "";

        // 1️⃣ Receive data chunks
        req.on("data", chunk => {
            body += chunk.toString();
        });

        // 2️⃣ When all data is received
        req.on("end", () => {
            try {
                const data = JSON.parse(body);
                const { name, email, phone, date, time, notes } = data;

                // 3️⃣ Save to database
                const stmt = db.prepare(`
          INSERT INTO reservations (name, email, phone, date, time, notes)
          VALUES (?, ?, ?, ?, ?, ?)
        `);

                stmt.run(name, email, phone, date, time, notes);

                // 4️⃣ Respond to frontend
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "Reservation successful 🍽️"
                }));

                console.log("✔ Reservation saved:", name);

            } catch (error) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Server error" }));
                console.error("✘ Error:", error.message);
            }
        });

        return;
    }

    // ❌ Unknown route
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
});

// 🚀 Start server
server.listen(PORT, () => {
    console.log(`Node backend running on http://localhost:${PORT}`);
});
