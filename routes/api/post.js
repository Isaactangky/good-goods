const express = require("express");
const router = express.Router();
const post = require("../../controllers/post");
const catchAsync = require("../../utils/catch-async.utils");
const { isLoggedIn, isAuthor } = require("../../middleware/auth");
router
  .route("/")
  /**
   * @route   GET api/post
   * @desc    Get All posts
   * @access  Public
   */

  .get(catchAsync(post.index))
  /**
   * @route   POST api/post
   * @desc    Create a post
   * @access  Private
   */
  .post(isLoggedIn, catchAsync(post.createPost));

router
  .route("/:id")
  /**
   * @route   GET api/post/:id
   * @desc    Get a post
   * @access  Public
   */
  .get(catchAsync(post.getPost))
  /**
   * @route   DELETE api/post/:id
   * @desc    Delete a post
   * @access  Private
   */
  .delete(isLoggedIn, isAuthor, catchAsync(post.deletePost))
  /**
   * @route   PUT api/post/:id
   * @desc    Update a post
   * @access  Private
   */
  .put(isLoggedIn, isAuthor, catchAsync(post.updatePost));

module.exports = router;
