import db from "./database.js";

/**
 * This script runs from INSIDE the backend folder
 * it checks the local habesha.db file.
 */
function check() {
    console.log("\n--- HABESHA KITCHEN: DATABASE CHECK ---");
    try {
        // Test if we can pull data
        const rows = db.prepare("SELECT * FROM reservations").all();

        if (rows.length === 0) {
            console.log("✔ Connection successful!");
            console.log("ℹ The table is currently empty. Try submitting a form on the website.");
        } else {
            console.log(`✔ Found ${rows.length} reservations:`);
            console.table(rows);
        }
    } catch (err) {
        console.error("✘ Database Error:", err.message);
        console.log("Tip: Make sure backend/database.js has run at least once to create the table.");
    }
    process.exit();
}

check();