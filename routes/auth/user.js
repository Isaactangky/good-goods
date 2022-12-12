const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");
const { isLoggedIn } = require("../../middleware/auth");
const catchAsync = require("../../utils/catch-async.utils");
/**
 * @route   get auth/user
 * @desc    get current logged in user data
 * @access  Private
 */
router.get("/", isLoggedIn, catchAsync(user.index));
/**
 * @route   POST auth/user/regiseter
 * @desc    create a new user account
 * @access  Public
 */
router.post("/register", catchAsync(user.register));
/**
 * @route   POST auth/user/login
 * @desc    login an user
 * @access  Public
 */
router.post("/login", catchAsync(user.login));

/**
 * @route   GET auth/user/logout
 * @desc    logout an user
 * @access  Public
 */
router.get("/logout", user.logout);

module.exports = router;
