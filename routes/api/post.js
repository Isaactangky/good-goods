const express = require("express");
const router = express.Router();
const post = require("../../controllers/post");
router
  .route("/")
  /**
   * @route   GET api/posts
   * @desc    Get All posts
   * @access  Public
   */

  .get(post.index)
  /**
   * @route   POST api/posts
   * @desc    Create a post
   * @access  Public
   */
  .post(post.createPost);

router
  .route("/:id")
  /**
   * @route   GET api/post/:id
   * @desc    Get a post
   * @access  Public
   */
  .get(post.getPost)
  /**
   * @route   DELETE api/post/:id
   * @desc    Delete a post
   * @access  Public
   */
  .delete(post.deletePost);

module.exports = router;
