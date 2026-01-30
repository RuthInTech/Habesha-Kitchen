// check-db.js
import db from "./database.js";

const rows = db.prepare("SELECT * FROM reservations").all();
console.log("All reservations:");
console.table(rows);
