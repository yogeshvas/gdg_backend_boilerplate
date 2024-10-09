import express from "express";
import { sayHello } from "../controllers/user.js";

const router = express.Router();

router.route("/").get(sayHello);

export default router;
