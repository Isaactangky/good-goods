const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", UserSchema);
