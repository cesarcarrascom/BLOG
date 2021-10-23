const router = require("express").Router();

const { isAuthenticated } = require("../middlewares/authentication");

const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("./PostController");

router.get("/", getAllPosts);

router.get("/:id", getPost);

router.post("/", isAuthenticated, createPost);

router.patch("/:id", isAuthenticated, updatePost);

router.delete("/:id", isAuthenticated, deletePost);

module.exports = router;
