import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, "habesha.db"));

const rows = db.prepare("SELECT * FROM reservations").all();

console.log("📦 Reservations in database:");
console.table(rows);
