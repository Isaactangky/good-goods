const { cloudinary } = require("../cloudinary");
const Post = require("../models/post");
/**
 * @route   GET api/post
 * @desc    Get All filtered posts
 * @access  Public
 */
module.exports.index = async (req, res) => {
  const category = req.query.category || "";
  const page = req.query.page || 1;
  const query = {
    category: { $regex: category, $options: "i" },
  };
  const batchSize = require("../config").POST_NUM_PER_PAGE;
  const posts = await Post.find(query)
    .sort({ date: -1 })
    .skip((page - 1) * batchSize)
    .limit(batchSize);
  if (!posts) {
    res.status(404);
    throw new Error("No posts found!");
  }
  // Find total pages
  const totalFilteredPosts = await Post.countDocuments(query);
  const totalPages = Math.ceil(totalFilteredPosts / batchSize);

  res.json({
    page,
    totalPages,
    category,
    posts,
  });
};
/**
 * @route   POST api/post
 * @desc    Create a post
 * @access  Private
 */
module.exports.createPost = async (req, res) => {
  const images = req.files.map((image) => {
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
  console.log(post);
  if (!post) {
    res.status(404);
    throw new Error("No post found");
  }
  console.log("456");
  res.status(200).json(post);
};
/**
 * @route   PUT api/post/:id
 * @desc    Update a post
 * @access  Private
 */
module.exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const newPost = JSON.parse(req.body.newPost);

  const post = await Post.findByIdAndUpdate(id, newPost, { new: true });

  if (req.files) {
    const images = req.files.map((image) => {
      return {
        filename: image.filename,
        url: image.path,
      };
    });

    post.images.push(...images);
  }
  const deleteImages = JSON.parse(req.body.deleteImages);
  if (deleteImages.length) {
    for (let filename of deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await post.updateOne({
      $pull: { images: { filename: { $in: deleteImages } } },
    });
  }

  await post.save();

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

  if (!post) {
    res.status(404);
    throw new Error("No post found");
  }
  res.status(200).json(post);
};
