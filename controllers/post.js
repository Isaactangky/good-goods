const Post = require("../models/post");

module.exports.index = async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
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
  const post = await Post.findById(id).populate({
    path: "reviews",
    options: { sort: { date: -1 } },
  });

  if (!post) throw new Error("No post found");
  res.status(200).json(post);
};

module.exports.deletePost = async (req, res, next) => {
  const id = req.params.id;
  const post = await Post.findByIdAndDelete(id);
  if (!post) throw new Error("No post found");
  res.status(200).json({ success: true });
};

module.exports.updatePost = async (req, res) => {
  const { id } = req.params;
  console.log(id, req.body);
  const post = await Post.findByIdAndUpdate(id, { ...req.body }, { new: true });

  // campground.images.push(...images);
  // if (req.body.deleteImages) {
  //   for (let img of req.body.deleteImages) {
  //     await cloudinary.uploader.destroy(img);
  //   }
  //   await campground.updateOne({
  //     $pull: { images: { filename: { $in: req.body.deleteImages } } },
  //   });
  // }
  await post.save();
  console.log("post");
  console.log(post);
  // req.flash("success", "Successfully updated campground");
  res.status(200).json(post);
};
