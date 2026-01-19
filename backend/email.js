// backend/email.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// create reusable transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password
    },
});

// function to send reservation email
export async function sendReservationEmail({ name, email, date, time, notes }) {
    try {
        const mailOptions = {
            from: `"Habesha Kitchen" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Reservation at Habesha Kitchen",
            html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for your reservation at Habesha Kitchen!</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
        <p>We look forward to serving you.</p>
        <br/>
        <p>– Habesha Kitchen Team</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Reservation email sent:", info.response);
        return info;
    } catch (err) {
        console.error("Error sending reservation email:", err);
        throw err;
    }
}
