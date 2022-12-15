const Post = require("../models/post");
/**
 * @route   GET api/post
 * @desc    Get All posts
 * @access  Public
 */
module.exports.index = async (req, res) => {
  const posts = await Post.find().sort({ date: -1 }).limit(30);
  // if (!posts) throw new Error("No Posts!");
  res.json(posts);
};
/**
 * @route   POST api/post
 * @desc    Create a post
 * @access  Private
 */
module.exports.createPost = async (req, res) => {
  console.log("controller");
  console.log(req.body);
  console.log(req.files);
  const images = req.files.map((image) => {
    console.log("");
    console.log(image);
    return {
      filename: image.filename,
      url: image.path,
    };
  });
  const newPost = new Post(req.body);
  newPost.author = req.user.id;
  newPost.images = images;
  const post = await newPost.save();
  if (!post) throw new Error("Something went wrong saving the post");
  const populatedPost = await Post.populate(post, {
    path: "author",
    select: "-password",
  });
  res.status(200).json(populatedPost);
};

/**
 * @route   GET api/post/:id
 * @desc    Get a post
 * @access  Public
 */
module.exports.getPost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const post = await Post.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
      options: { sort: { date: -1 } },
    })
    .populate({
      path: "author",
      select: "username",
    });

  if (!post) throw new Error("No post found");
  res.status(200).json(post);
};
/**
 * @route   DELETE api/post/:id
 * @desc    Delete a post
 * @access  Private
 */
module.exports.deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findByIdAndDelete(id);
  if (!post) throw new Error("No post found");
  res.status(200).json(post);
};
/**
 * @route   PUT api/post/:id
 * @desc    Update a post
 * @access  Private
 */
module.exports.updatePost = async (req, res) => {
  const { id } = req.params;
  console.log(id, req.body);
  const post = await Post.findByIdAndUpdate(id, { ...req.body }, { new: true });

  await post.save();
  console.log("post");
  console.log(post);
  res.status(200).json(post);
};
