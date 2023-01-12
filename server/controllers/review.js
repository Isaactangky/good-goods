const Review = require("../models/review");
const Post = require("../models/post");
/**
 * @route   POST api/post/:id/reviews
 * @desc    create a review to a post
 * @access  Private
 */
module.exports.createReview = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    res.status(404);
    throw new Error("No post found");
  }

  const newReview = new Review(req.body);
  newReview.author = req.user.id;
  const savedReview = await newReview.save();
  if (!savedReview) throw new Error("Something went wrong saving the review");
  post.reviews.push(newReview);
  const savedPost = await post.save();
  if (!savedPost) throw new Error("Something went wrong saving the post");
  const populatedReview = await Review.populate(savedReview, {
    path: "author",
    select: "-password",
  });
  res.status(200).json(populatedReview);
};
/**
 * @route   DELETE api/post/:id/reviews/:reviewId
 * @desc    delete a review from a post
 * @access  Private
 */
module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  const review = await Review.findByIdAndDelete(reviewId);
  await Post.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
  });
  res.status(200).json(review);
};
