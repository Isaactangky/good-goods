const express = require("express");
const router = express.Router();
const post = require("../../controllers/post");
const catchAsync = require("../../utils/catch-async.utils");

router
  .route("/")
  /**
   * @route   GET api/posts
   * @desc    Get All posts
   * @access  Public
   */

  .get(catchAsync(post.index))
  /**
   * @route   POST api/posts
   * @desc    Create a post
   * @access  Public
   */
  .post(catchAsync(post.createPost));

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
   * @access  Public
   */
  .delete(catchAsync(post.deletePost));

module.exports = router;
