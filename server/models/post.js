const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const User = require("./user");

const imageSchema = Schema({
  url: String,
  filename: String,
});
const postSchema = Schema({
  title: {
    type: String,
  },
  images: [imageSchema],
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
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

// delete reviews after deleting a post
postSchema.post("findOneAndDelete", async (post) => {
  if (post) {
    await Review.deleteMany({
      _id: { $in: post.reviews },
    });
  }
});

module.exports = mongoose.model("post", postSchema);
