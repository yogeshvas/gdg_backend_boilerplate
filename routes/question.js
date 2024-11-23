import express from "express";
import { createQuestion } from "../controllers/question.js";

const router = express.Router();

router.route("/").post(createQuestion);

export default router;
