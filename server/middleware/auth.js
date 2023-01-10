const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const Review = require("../models/review");

const JWT_SECRET = process.env.JWT_SECRET || "notagoodsecret";
// protecting post routes
module.exports.isLoggedIn = function (req, res, next) {
  const token = req.headers["x-auth-token"];
  if (!token)
    return res.status(401).json({ message: "No valid token, access denied" });
  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    // Add user to req
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};
module.exports.isAuthor = async function (req, res, next) {
  try {
    // isLoggedIn added user to req
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) throw new Error("No post found");
    if (!post.author.equals(req.user.id))
      return res
        .status(401)
        .json({ message: "You do not have permission to do that" });
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports.isReviewAuthor = async function (req, res, next) {
  try {
    // isLoggedIn added user to req
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review) throw new Error("No review found");
    if (!review.author.equals(req.user.id))
      return res
        .status(401)
        .json({ message: "You do not have permission to do that" });
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
