const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", PostSchema);
