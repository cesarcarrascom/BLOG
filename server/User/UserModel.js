const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, " Please provide a username."],
      unique: true,
      minLength: 3,
      maxLength: 50,
    },
    name: {
      type: String,
      required: [true, " Please provide a name."],
      minLength: 3,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email.",
      ],
      unique: [true, "E-mail already exists."],
    },
    password: {
      type: String,
      required: [true, "Please provide a password."],
      minLength: [4, "Password must be longer than 4 characters."],
      select: false,
    },
    profilePicture: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1634173870435-226a90c83616?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=914&q=80",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (
  inputPassword,
  savedPassword
) {
  const isMatch = await bcrypt.compare(inputPassword, savedPassword);
  return isMatch;
};

UserSchema.methods.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);
  return newPassword;
};

module.exports = mongoose.model("User", UserSchema);
