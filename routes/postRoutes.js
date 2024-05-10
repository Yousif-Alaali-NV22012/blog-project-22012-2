import express from "express";
const router = express.Router();
import {
    createPost,
    deletePost,
    updatePost,
    getPost,
    getAllPosts,
  } from "../controllers/postControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);

router.post("/", authGuard, adminGuard, createPost);
router
.route("/:slug")
.put(authGuard, adminGuard, updatePost)
.delete(authGuard, adminGuard, deletePost)
.get(getPost);

export default router;