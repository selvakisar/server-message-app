import express from "express";
import protectRoute from "../auth/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
const userRoutes =router
export default userRoutes;
