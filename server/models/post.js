const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const options = { toJSON: { virtuals: true } };
const { CATEGORIES } = require("../config");
const imageSchema = Schema(
  {
    url: String,
    filename: String,
  },
  options
);

imageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_50");
});

const postSchema = Schema(
  {
    title: {
      type: String,
    },
    images: [imageSchema],
    description: {
      type: String,
    },
    category: {
      type: String,
      enum: CATEGORIES,
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
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  options
);

// delete reviews after deleting a post
postSchema.post("findOneAndDelete", async (post) => {
  if (post) {
    await Review.deleteMany({
      _id: { $in: post.reviews },
    });
  }
});

module.exports = mongoose.model("post", postSchema);
