const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post Title can not be empty."],
      minlength: [4, "Post title must be 4 characters or more."],
      trim: true,
    },
    body: {
      type: String,
      required: [true, "Post body can not be empty."],
    },
    photo: {
      type: String,
      required: false,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "All Post must have an author."],
    },
    categories: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
