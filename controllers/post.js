const Post = require("../models/post");
module.exports.index = async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  // if (!posts) throw new Error("No Posts!");
  res.json(posts);
};

module.exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  newPost.author = req.user.id;
  const post = await newPost.save();
  if (!post) throw new Error("Something went wrong saving the post");
  const populatedPost = await Post.populate(post, {
    path: "author",
    select: "-password",
  });
  res.status(200).json(populatedPost);
};

module.exports.getPost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const post = await Post.findById(id)
    .populate({
      path: "reviews",
      options: { sort: { date: -1 } },
    })
    .populate({
      path: "author",
      select: "username",
    });

  if (!post) throw new Error("No post found");
  res.status(200).json(post);
};

module.exports.deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findByIdAndDelete(id);
  if (!post) throw new Error("No post found");
  res.status(200).json(post);
};

module.exports.updatePost = async (req, res) => {
  const { id } = req.params;
  console.log(id, req.body);
  const post = await Post.findByIdAndUpdate(id, { ...req.body }, { new: true });

  await post.save();
  console.log("post");
  console.log(post);
  res.status(200).json(post);
};
