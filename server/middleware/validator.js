const { postSchema, reviewSchema } = require("../joiSchema");

module.exports.validatePost = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    const message = error.details.map((err) => err.message).join(".");
    throw new Error(message);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const message = error.details.map((err) => err.message).join(".");
    throw new Error(message);
  } else {
    next();
  }
};
