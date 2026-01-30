import express from "express";
import cors from "cors";
import mailRouter from "./routes/mail.js";

const app = express();

app.use(cors()); // This is vital for your React app to connect!
app.use(express.json());

app.use("/api/mail", mailRouter);

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});