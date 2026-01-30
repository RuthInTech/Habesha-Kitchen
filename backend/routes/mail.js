import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send", async (req, res) => {
  const { name, email, phone, date, time, notes } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "habeshakitchen37@gmail.com", // Your business email
        pass: "hqca ueex yjmr kovz", // Gmail App password
      },
    });

    // 1️⃣ Send email to business
    await transporter.sendMail({
      from: email, // customer email
      to: "habeshakitchen37@gmail.com",
      subject: "New Reservation",
      html: `
        <h2>New Reservation Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time || "Not specified"}</p>
        <p><strong>Special Requests:</strong> ${notes || "None"}</p>
      `,
    });

    // 2️⃣ Send confirmation email to customer
    await transporter.sendMail({
      from: "habeshakitchen37@gmail.com",
      to: email,
      subject: "Your Reservation at Habesha Kitchen",
      html: `
        <h2>Hello ${name},</h2>
        <p>Your reservation has been received. Here are the details:</p>
        <ul>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time || "Not specified"}</li>
          <li><strong>Special Requests:</strong> ${notes || "None"}</li>
        </ul>
        <p>We look forward to serving you! 🍽️</p>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

export default router;
