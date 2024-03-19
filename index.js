import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from "./db.js";
import authroutes from "./routes/auth.route.js";

dotenv.config();
// parse the incoming requests with JSON payloads
app.use(express.json());
app.use(cookieParser());
const __dirname = path.resolve();

app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
const PORT = process.env.PORT;
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
