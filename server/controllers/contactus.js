const User = require("../models/user");
const sendEmail = require("../utils/sendEmail.utils");

/**
 * @route   POST api/contactus
 * @desc    Send a email
 * @access  Private
 */
module.exports.index = async (req, res, next) => {
  const { subject, message } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) throw new Error("User not found.");
  if (!subject || !message) throw new Error("Please add subject and message.");

  const senderEmail = process.env.EMAIL_USER;
  const recipientEmail = process.env.EMAIL_USER;
  const replyEmail = user.email;

  try {
    await sendEmail(subject, message, senderEmail, recipientEmail, replyEmail);

    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Email not sent, please try again" });
  }
};
