const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const postSchema = Schema({
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
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
postSchema.post("findOneAndDelete", async (post) => {
  if (post) {
    await Review.deleteMany({
      _id: { $in: post.reviews },
    });
  }
});

module.exports = mongoose.model("post", postSchema);
