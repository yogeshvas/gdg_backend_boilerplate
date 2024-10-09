import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.js";
dotenv.config();

const app = express();

app.use("/api/v1/users", userRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`listening on port ${process.env.PORT}`);
});
