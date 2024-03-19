import express from 'express';
import protectRoute from "../auth/protectRoute.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);


const messageRoutes=router
export default messageRoutes;