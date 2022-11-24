const express = require("express");
const passport = require("passport");
const router = express.Router();
const user = require("../controllers/user");

/**
 * @route   get api/user
 * @desc    get current logged in user
 * @access  Public
 */
router.get("/", user.index);
/**
 * @route   POST api/user/regiseter
 * @desc    create a new user account
 * @access  Public
 */
router.post("/register", user.register);
/**
 * @route   POST api/user/login
 * @desc    login an user
 * @access  Public
 */
router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
    keepSessionInfo: true,
  }),
  user.login
);

/**
 * @route   GET api/user/logout
 * @desc    logout an user
 * @access  Public
 */
router.get("/logout", user.logout);

module.exports = router;
