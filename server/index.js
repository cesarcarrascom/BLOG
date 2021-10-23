require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const { StatusCodes } = require("http-status-codes");

// Declare app
const app = express();

app.use(express.json());
app.use(cors());

// Routers
const PostRouter = require("./Post/PostRoutes");
const UserRouter = require("./User/UserRoutes");
const AuthRouter = require("./Auth/AuthRoutes");
const CategoryRouter = require("./Category/CategoryRoutes");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "Images");
  },
  filename: (req, file, callback) => {
    callback(null, "image.png");
  },
});

const upload = multer({ storage: storage });

app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.status(StatusCodes.OK).json("File has been uploaded.");
});

app.use("/api/v1/posts", PostRouter);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/category", CategoryRouter);

// DB Connect & Server listen
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
