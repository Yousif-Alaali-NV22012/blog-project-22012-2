import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db";

import {
  errorResponsiveHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);
app.use(invalidPathHandler);
app.use(errorResponsiveHandler);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
