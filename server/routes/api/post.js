const express = require("express");
const router = express.Router();
const post = require("../../controllers/post");
const catchAsync = require("../../utils/catchAsync.utils");
const { isLoggedIn, isAuthor } = require("../../middleware/auth");
const { upload } = require("../../middleware/multer");

router
  .route("/")
  .get(catchAsync(post.index))
  .post(isLoggedIn, upload.array("images"), catchAsync(post.createPost));

router
  .route("/:id")
  .get(catchAsync(post.getPost))
  .delete(isLoggedIn, isAuthor, catchAsync(post.deletePost))
  .put(
    isLoggedIn,
    isAuthor,
    upload.array("images"),
    catchAsync(post.updatePost)
  );
router.post("/:id/like", isLoggedIn, catchAsync(post.toggleLike));

module.exports = router;
