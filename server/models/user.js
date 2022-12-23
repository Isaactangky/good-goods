const mongoose = require("mongoose");
const { Schema } = mongoose;
// const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
