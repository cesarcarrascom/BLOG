const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name can not be empty."],
    trim: true,
  },
});

module.exports = mongoose.model("Post", CategorySchema);
