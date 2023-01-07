const express = require("express");
const router = express.Router({ mergeParams: true });
const catchAsync = require("../../utils/catchAsync.utils");
const review = require("../../controllers/review");
const { isLoggedIn, isReviewAuthor } = require("../../middleware/auth");
/**
 * @route   POST api/post/:id/reviews
 * @desc    create a review to a post
 * @access  Private
 */
router.post("/", isLoggedIn, catchAsync(review.createReview));
/**
 * @route   DELETE api/post/:id/reviews/:reviewId
 * @desc    delete a review from a post
 * @access  Private
 */
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(review.deleteReview)
);
module.exports = router;
