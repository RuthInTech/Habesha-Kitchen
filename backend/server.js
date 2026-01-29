import express from "express";
import cors from "cors";
import mailRouter from "./routes/mail.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/mail", mailRouter);

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
