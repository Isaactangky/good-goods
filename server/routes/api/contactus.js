const express = require("express");
const router = express.Router();
const contactus = require("../../controllers/contactus");
const catchAsync = require("../../utils/catchAsync.utils");
const { isLoggedIn, isAuthor } = require("../../middleware/auth");

router.post("/", isLoggedIn, catchAsync(contactus.index));

module.exports = router;
