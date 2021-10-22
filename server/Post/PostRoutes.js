const router = require("express").Router();

const {
  getAllPosts,
  getSinglePost,
  createPost,
  updateSinglePost,
  deleteSinglePost,
} = require("./PostController");

router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

router.post("/", createPost);

router.patch("/:id", updateSinglePost);

router.delete("/:id", deleteSinglePost);

module.exports = router;
