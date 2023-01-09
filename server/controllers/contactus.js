const User = require("../models/user");
const sendEmail = require("../utils/sendEmail.utils");

/**
 * @route   POST api/contactus
 * @desc    Send a email
 * @access  Private
 */
module.exports.index = async (req, res) => {
  const { subject, email, message } = req.body;
  if (!subject || !message || !email)
    throw new Error("Please add subject, email and message.");

  const senderEmail = process.env.EMAIL_USER;
  const recipientEmail = process.env.EMAIL_USER;
  const replyEmail = email;

  try {
    await sendEmail(subject, message, senderEmail, recipientEmail, replyEmail);

    res.status(200).json({ success: true, message: "Message Sent" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Message not sent, please try again" });
  }
};
