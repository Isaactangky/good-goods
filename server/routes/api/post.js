const express = require("express");
const router = express.Router();
const post = require("../../controllers/post");
const catchAsync = require("../../utils/catchAsync.utils");
const { isLoggedIn, isAuthor } = require("../../middleware/auth");
const { upload } = require("../../middleware/multer");

router
  .route("/")
  .get(catchAsync(post.index))
  .post(
    isLoggedIn,
    (req, res, next) => {
      console.log(req.body);
      console.log(req.files);
      next();
    },
    upload.array("images"),
    catchAsync(post.createPost)
  );

router
  .route("/:id")
  .get(catchAsync(post.getPost))
  .delete(isLoggedIn, isAuthor, catchAsync(post.deletePost))
  .put(isLoggedIn, isAuthor, catchAsync(post.updatePost));

module.exports = router;
