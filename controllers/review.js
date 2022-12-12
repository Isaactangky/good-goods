const Review = require("../models/review");
const Post = require("../models/post");
module.exports.createReview = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  const newReview = new Review(req.body);
  newReview.author = req.user.id;
  const savedReview = await newReview.save();
  if (!savedReview) throw new Error("Something went wrong saving the review");
  post.reviews.push(newReview);
  const savedPost = await post.save();
  if (!savedPost) throw new Error("Something went wrong saving the post");
  res.status(200).json(newReview);
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  const review = await Review.findByIdAndDelete(reviewId);
  const post = await Post.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
  });
  res.status(200).json(review);
};
