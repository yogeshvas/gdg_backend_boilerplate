import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.js";
import questionRoutes from "./routes/question.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/questions", questionRoutes);
app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`listening on port ${process.env.PORT}`);
});
