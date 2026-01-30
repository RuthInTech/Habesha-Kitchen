import express from "express";
import nodemailer from "nodemailer";
import db from "../database.js";

const router = express.Router();

router.post("/send", async (req, res) => {
  const { name, email, phone, date, time, notes } = req.body;

  console.log(`\n--- Reservation Request: ${name} ---`);

  try {
    // 1. SAVE TO DATABASE
    const stmt = db.prepare(`
            INSERT INTO reservations (name, email, phone, date, time, notes)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
    stmt.run(name, email, phone, date, time, notes);
    console.log("✔ Saved to SQLite Database");

    // 2. RESPOND TO FRONTEND IMMEDIATELY (Stops the "Sending..." message)
    res.status(200).json({ message: "Reservation successful!" });

    // 3. BACKGROUND EMAIL ATTEMPT
    const transporter = nodemailer.createTransport({
      host: "74.125.142.108", // Direct Gmail IP to avoid DNS issues
      port: 587,
      secure: false,
      auth: {
        user: "habeshakitchen37@gmail.com",
        pass: "hqcaueexyjmrkovz",
      },
      tls: {
        rejectUnauthorized: false,
        servername: "smtp.gmail.com"
      }
    });

    // 4. THE FORMATTED EMAIL CONTENT
    const mailOptions = {
      from: '"Habesha Kitchen" <habeshakitchen37@gmail.com>',
      to: email,
      subject: "Your Reservation at Habesha Kitchen",
      text: `Hello ${name},

Your reservation has been received. Here are the details:

Phone: ${phone}
Date: ${date}
Time: ${time || "Not specified"}
Special Requests: ${notes || "None"}

We look forward to serving you!`
    };

    transporter.sendMail(mailOptions).then(() => {
      console.log("✔ Email Sent Successfully with requested format");
    }).catch((mailError) => {
      console.error("✘ Email failed to send (Network Block):", mailError.message);
    });

  } catch (err) {
    console.error("✘ Critical Server Error:", err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

export default router;