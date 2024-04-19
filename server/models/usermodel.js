const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
