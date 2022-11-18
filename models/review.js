const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = Schema({
  content: String,
  rating: Number,
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
  author: {
    type: String,
    default: "Anonymous",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
