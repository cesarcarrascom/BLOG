const Post = require("./PostModel");
const { StatusCodes } = require("http-status-codes");

const getAllPosts = async (req, res) => {
  const { category, sort, title, newest, oldest, author } = req.query;
  const queryObject = {};

  newest ? (queryObject.newest = true) : false;

  if (title) {
    // Finds title by case insensitive
    queryObject.title = { $regex: title, $options: "i" };
  }

  // if (author) {
  //   queryObject.author = { $regex: author, $options: "i" };
  // }

  if (category) {
    queryObject.categories = { $in: [category] };
  }

  let result = Post.find(queryObject);

  // Sort functionality
  if (sort) {
    //  Splits query params by , and joins them back with spaces.
    const sortedList = sort.split(",").join(" ");

    // Returns query params with spaces to result.
    result = result.sort(sortedList);
  } else {
    result = result.sort("-createdAt");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // console.log(req.query);
  result = result.skip(skip).limit(limit);

  try {
    const posts = await result;
    res.status(StatusCodes.OK).json({ posts, hits: posts.length });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.find({ _id: req.params.id });
    res.status(StatusCodes.OK).json({ post });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  req.body.author = req.user.userId;
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(StatusCodes.CREATED).json({ savedPost });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  const {
    user: { userId },
    params: { id: postId },
    body: { title, body, photo, categories },
  } = req;

  try {
    const post = await Post.findOne({ postId });

    if (userId == post.author) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          { $set: req.body },
          { new: true, runValidators: true }
        );
        res.status(StatusCodes.OK).json({ updatedPost });
      } catch (error) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      }
    } else {
      res
        .status(StatusCodes.FORBIDDEN)
        .json("You are not allowed in this route.");
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  const {
    user: { userId },
    params: { id: postId },
  } = req;

  try {
    const post = await Post.findOne({ postId });

    if (userId == post.author) {
      try {
        await post.delete();
        res.status(StatusCodes.OK).json({ msg: "Post has ben deleted..." });
      } catch (error) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: error.message });
      }
    } else {
      res
        .status(StatusCodes.FORBIDDEN)
        .json("You are not allowed in this route.");
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
