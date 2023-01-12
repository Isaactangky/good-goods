const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");
const { isLoggedIn } = require("../../middleware/auth");
const catchAsync = require("../../utils/catchAsync.utils");

router.get("/", isLoggedIn, catchAsync(user.index));

router.post("/register", catchAsync(user.register));

router.post("/login", catchAsync(user.login));

router.get("/logout", user.logout);

module.exports = router;
