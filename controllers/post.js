const Post = require("../models/post");

module.exports.index = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    if (!posts) throw new Error("No Posts!");
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body.post);
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong saving the post");
    console.log(newPost);
    // req.flash("success", "Successfully made a new campground");
    // res.redirect(`/campgrounds/${newPost._id}`);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.getPost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post) throw new Error("No post found");
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id);
    if (!post) throw new Error("No post found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};
