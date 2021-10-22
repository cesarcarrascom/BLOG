const router = require("express").Router();

const { registerUser, loginUser } = require("./AuthController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
