const Post = require("./PostModel");
const { StatusCodes } = require("http-status-codes");

const getAllPosts = async (req, res) => {
  const { sort, name, newest } = req.query;
  const queryObject = {};

  newest ? (queryObject.newest = true) : false;

  if (name) {
    // Finds title by case insensitive
    queryObject.title = { $regex: name, $options: "i" };
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

const getSinglePost = async (req, res) => {
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

const updateSinglePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ updatedPost });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const deleteSinglePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: "Post has ben deleted..." });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updateSinglePost,
  deleteSinglePost,
};
