const { cloudinary } = require("../cloudinary");
const Post = require("../models/post");
const User = require("../models/user");
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
  // validate images array
  if (!req.files) throw new Error("Images for post is required");

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
  if (!post) {
    res.status(404);
    throw new Error("No post found");
  }
  res.status(200).json(post);
};
/**
 * @route   PUT api/post/:id
 * @desc    Update a post
 * @access  Private
 */
module.exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const newPost = Object.keys(req.body)
    .filter((key) => key !== "deleteImages")
    .reduce((post, key) => {
      post[key] = req.body[key];
      return post;
    }, {});

  const post = await Post.findByIdAndUpdate(id, newPost, { new: true });
  // Add images, optional
  if (req.files) {
    const images = req.files.map((image) => {
      return {
        filename: image.filename,
        url: image.path,
      };
    });

    post.images.push(...images);
  }
  if (req.body.deleteImages) {
    const deleteImages = req.body.deleteImages.split(",");
    for (let filename of deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await Post.updateOne(
      { _id: id },
      {
        $pull: { images: { filename: { $in: deleteImages } } },
      }
    );
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

/**
 * @route   DELETE api/post/:id/like
 * @desc    Like/Unlike a post
 * @access  Private
 */
module.exports.toggleLike = async (req, res) => {
  const user = await User.findById(req.user.id);
  const postId = req.params.id;
  const post = await Post.findById(postId);

  const isLiked = post.likes.some((like) => like.equals(user._id));
  if (isLiked) {
    await Post.updateOne({ _id: postId }, { $pull: { likes: user._id } });
  } else {
    post.likes.push(user._id);
    await post.save();
  }
  const updatedPost = await Post.findById(postId);

  res.status(200).json({ post: updatedPost });
};
