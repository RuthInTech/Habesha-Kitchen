import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send", async (req, res) => {
  const { name, email, date, people } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "habeshakitchen37@gmail.com",
        pass: "hqca ueex yjmr kovz", // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Habesha Kitchen" <habeshakitchen37@gmail.com>`,
      to: email, // ✅ USER EMAIL
      subject: "Reservation Confirmation 🍽️",
      html: `
        <h2>Reservation Confirmed</h2>
        <p>Hello <strong>${name}</strong>,</p>
        <p>Your reservation has been received.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Guests:</strong> ${people}</p>
        <br/>
        <p>Habesha Kitchen</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email failed" });
  }
});

export default router;
