import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { sendReservationEmail } from "./email.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

app.get("/", (req, res) => {
    res.send("🚀 Backend running");
});

app.post("/reserve", async (req, res) => {
    const { name, email, phone, date, time, notes } = req.body;

    if (!name || !email || !date || !time) {
        return res.status(400).json({
            error: "Missing required fields",
        });
    }

    try {
        // INSERT INTO SUPABASE
        const { data, error } = await supabase
            .from("reservation")
            .insert([
                {
                    name,
                    email,
                    phone: phone || null,
                    reservation_date: date,
                    reservation_time: time,
                    notes: notes || null,
                },
            ]);

        if (error) {
            console.error("Supabase insert error:", error);
            return res.status(500).json({
                error: error.message,
            });
        }

        // SEND EMAIL
        await sendReservationEmail({
            name,
            email,
            phone,
            date,
            time,
            notes,
        });

        return res.status(200).json({
            message: "Reservation saved + email sent",
        });
    } catch (err) {
        console.error("SERVER ERROR:", err);
        return res.status(500).json({
            error: "Server crashed",
        });
    }
});

app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});