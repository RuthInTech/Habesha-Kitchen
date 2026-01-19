// backend/testEmail.js
import { sendReservationEmail } from "./email.js";

(async () => {
    try {
        await sendReservationEmail({
            name: "Test User",
            email: "testuser@gmail.com",
            date: "2026-01-20",
            time: "19:30",
            notes: "Near the window, please"
        });
        console.log("Test email sent!");
    } catch (err) {
        console.error("Failed to send test email:", err);
    }
})();
