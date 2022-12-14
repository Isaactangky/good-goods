const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET || "notagoodsecret";
const { JWT_TOKEN_EXPIRATION } = require("../config");
/**
 * @route   get auth/user
 * @desc    get current logged in user data
 * @access  Private
 */
module.exports.index = async (req, res) => {
  const { user } = req;
  const foundUser = await User.findById(user.id).select("-password");
  if (!foundUser) {
    res.status(404);
    throw new Error("User dose not exist");
  }
  res.status(200).json({
    user: {
      id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
    },
  });
};
/**
 * @route   POST auth/user/regiseter
 * @desc    create a new user account
 * @access  Public
 */
module.exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email)
    throw new Error("Please fill in all fields");

  // check for existing user
  const foundUser = await User.findOne({ email });
  if (foundUser) throw new Error("User already exist");
  // Create salt & hash
  const salt = await bcrypt.genSalt(10);
  if (!salt) throw new Error("Something went wrong with Bcrypt.");
  const hash = await bcrypt.hash(password, salt);
  if (!hash) throw new Error("Something went wrong hashing the password.");
  const user = new User({ username, email, password: hash });
  const savedUser = await user.save();
  if (!savedUser) throw new Error("Something went wrong saving new user.");
  // sign token
  const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
    expiresIn: JWT_TOKEN_EXPIRATION,
  }); // 1day
  res.status(200).json({
    token,
    user: {
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
    },
  });
};
/**
 * @route   POST auth/user/login
 * @desc    login an user
 * @access  Public
 */
module.exports.login = async (req, res) => {
  const { password, email } = req.body;
  if (!password || !email) throw new Error("Please fill in all fields");

  // Check existing user
  const foundUser = await User.findOne({ email });
  if (!foundUser) throw new Error("Invalid email or password");
  // Check password
  const isMatch = await bcrypt.compare(password, foundUser.password);
  if (!isMatch) throw new Error("Invalid email or password");

  // Valid password
  const token = jwt.sign({ id: foundUser._id }, JWT_SECRET, {
    expiresIn: JWT_TOKEN_EXPIRATION,
  }); // 1day
  res.status(200).json({
    token,
    user: {
      id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
    },
  });
};

// TODO
/**
 * @route   GET auth/user/logout
 * @desc    logout an user
 * @access  Public
 */
module.exports.logout = async (req, res) => {
  // req.logout(function (error) {
  //   if (error) {
  //     res.status(400).json({ success: false, error });
  //   }
  //   res.status(200).json({ success: true });
  // });
};
