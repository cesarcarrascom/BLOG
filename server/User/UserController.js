const User = require("./UserModel");
const Post = require("../Post/PostModel");
const { StatusCodes } = require("http-status-codes");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `User not found with id: ${req.params.id}` });
    } else {
      res.status(StatusCodes.OK).json({ user });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    // CHECKS IF USER EXISTS
    // IF IT DOESN'T, THROW 404
    const user = await User.findById(req.params.id);
    if (!user) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `User not found with id: ${req.params.id}` });
    } else {
      // CHECKS IF USER IS UPDATING PASSWORD
      // IF IT IS, HASH NEW PASSWORD BEFORE UPDATING
      if (req.body.password) {
        req.body.password = await user.hashPassword(req.body.password);
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      res.status(StatusCodes.OK).json({ updatedUser });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

// const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ message: `User not found with id: ${req.params.id}` });
//     } else {
//       try {
//         await Post.deleteMany({ author: user.userId });
//       } catch (error) {
//         res
//           .status(StatusCodes.INTERNAL_SERVER_ERROR)
//           .json({ error: error.message });
//       }
//       await User.findOneAndDelete(req.params.id);
//       res
//         .status(StatusCodes.OK)
//         .json({ message: "User successfully deleted." });
//     }
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: error.message });
//   }
// };

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    try {
      await Post.deleteMany({ author: user.userId });
      await User.findOneAndDelete(req.params.id);
      res
        .status(StatusCodes.OK)
        .json({ message: "User successfully deleted." });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
module.exports = { getUser, updateUser, deleteUser };
