const express = require("express");
const router = express.Router({ mergeParams: true });
const catchAsync = require("../../utils/catchAsync.utils");
const review = require("../../controllers/review");
const { isLoggedIn, isReviewAuthor } = require("../../middleware/auth");
const { validateReview } = require("../../middleware/validator");

router.post("/", isLoggedIn, validateReview, catchAsync(review.createReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(review.deleteReview)
);
module.exports = router;
