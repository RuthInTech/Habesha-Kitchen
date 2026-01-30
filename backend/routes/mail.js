// backend/routes/mail.js
import express from "express";
import nodemailer from "nodemailer";
import db from "../database.js"; // Import SQLite DB

const router = express.Router();

router.post("/send", async (req, res) => {
  const { name, email, phone, date, time, notes } = req.body;

  try {
    // Save to SQLite
    const stmt = db.prepare(`
            INSERT INTO reservations (name, email, phone, date, time, notes)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
    stmt.run(name, email, phone, date, time, notes);

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "habeshakitchen37@gmail.com",
        pass: "hqca ueex yjmr kovz", // Gmail app password
      },
    });

    await transporter.sendMail({
      from: "habeshakitchen37@gmail.com",
      to: email, // Customer email
      subject: "Your Reservation at Habesha Kitchen",
      text: `Hello ${name},

Your reservation has been received. Here are the details:

Phone: ${phone}
Date: ${date} at ${time || "Not specified"}
Special Requests: ${notes || "None"}

We look forward to serving you!
            `,
    });

    res.status(200).json({ message: "Reservation saved & email sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save reservation or send email" });
  }
});

export default router;
