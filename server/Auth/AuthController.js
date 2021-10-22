const User = require("../User/UserModel");
const { StatusCodes } = require("http-status-codes");

const registerUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide email and password." });
  } else {
    try {
      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: "Invalid credentials..." });
      }

      const isPasswordCorrect = await user.comparePassword(
        password,
        user.password
      );

      if (!isPasswordCorrect) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: "Invalid credentials..." });
      }

      const token = user.createJWT();
      res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }
};

module.exports = { registerUser, loginUser };
