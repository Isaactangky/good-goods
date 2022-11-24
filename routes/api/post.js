const express = require("express");
const router = express.Router();
const post = require("../../controllers/post");
const catchAsync = require("../../utils/catch-async.utils");
const { isLoggedIn } = require("../../middleware");
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
   * @access  Public
   */
  .delete(isLoggedIn, catchAsync(post.deletePost))
  /**
   * @route   PUT api/post/:id
   * @desc    Update a post
   * @access  Public
   */
  .put(isLoggedIn, catchAsync(post.updatePost));

module.exports = router;
