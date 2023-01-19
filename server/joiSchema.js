const Joi = require("joi");
const { CATEGORIES } = require("./config");

module.exports.postSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string()
    .required()
    .valid(...CATEGORIES),
  description: Joi.string().required(),
  deleteImages: Joi.array(),
});

module.exports.reviewSchema = Joi.object({
  content: Joi.string().required(),
  rating: Joi.number().max(5).min(1).required(),
});
