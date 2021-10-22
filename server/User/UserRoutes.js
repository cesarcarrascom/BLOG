const router = require("express").Router();
const {
  isAuthenticatedAndAuthorized,
} = require("../middlewares/authentication");

const { getUser, updateUser, deleteUser } = require("./UserController");

// GET USER BY ID
router.get("/:id", getUser);

// UPDATE USER
router.patch("/:id", isAuthenticatedAndAuthorized, updateUser);

// DELETE USER
router.delete("/:id", deleteUser);

module.exports = router;
