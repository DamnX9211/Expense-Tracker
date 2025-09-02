import express  from "express";
import { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import expenseRoute from "./routes/expenseRoute.js";

dotenv.config({});

const app = express();
const PORT = 8000;


//middleware
app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({ extended: true }))
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true
}
app.use(cors(corsOptions));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/expense", expenseRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT}`)
})