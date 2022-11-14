const Post = require("../models/post");

module.exports.index = async (req, res) => {
  const posts = await Post.find();
  // if (!posts) throw new Error("No Posts!");
  res.json(posts);
};

module.exports.createPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  const post = await newPost.save();
  if (!post) throw Error("Something went wrong saving the post");
  // req.flash("success", "Successfully made a new campground");
  // res.redirect(`/post/${newPost._id}`);
  res.status(200).json(post);
};

module.exports.getPost = async (req, res, next) => {
  const id = req.params.id;

  const post = await Post.findById(id);
  if (!post) throw new Error("No post found");
  console.log("post", post);
  res.status(200).json(post);
};

module.exports.deletePost = async (req, res, next) => {
  const id = req.params.id;
  const post = await Post.findByIdAndDelete(id);
  if (!post) throw new Error("No post found");
  res.status(200).json({ success: true });
};
