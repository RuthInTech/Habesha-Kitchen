// backend/database.js
import Database from "better-sqlite3";
import fs from "fs";

// Create database file if it doesn't exist
const dbFile = "./reservations.db";
if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, "");
}

const db = new Database(dbFile);

// Create table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT,
    notes TEXT
  )
`).run();

export default db;
