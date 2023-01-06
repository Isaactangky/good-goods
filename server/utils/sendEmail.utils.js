const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, sender, recipient, reply) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });
  const options = {
    from: sender,
    to: recipient,
    replyTo: reply,
    subject,
    html: message,
  };
  // Send Email
  await transporter.sendMail(options);
};

module.exports = sendEmail;
