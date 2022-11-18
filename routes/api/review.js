const express = require("express");
const router = express.Router();
const catchAsync = require("../../utils/catch-async.utils");
const review = require("../../controllers/review");

/**
 * @route   POST api/post/:id/reviews
 * @desc    create a review to a post
 * @access  Public
 */
router.post("/", catchAsync(review.createReview));
/**
 * @route   DELETE api/post/:id/reviews/:reviewId
 * @desc    delete a review from a post
 * @access  Public
 */
router.delete("/:reviewId", catchAsync(review.deleteReview));
module.exports = router;
