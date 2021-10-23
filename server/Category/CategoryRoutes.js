const router = require("express").Router();

const { isAuthenticated } = require("../middlewares/authentication");
const { createCategory, getCategories } = require("./CategoryController");

router.post("/", isAuthenticated, createCategory);
router.get("/", getCategories);

module.exports = router;
