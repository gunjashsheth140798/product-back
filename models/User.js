const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  phonenumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
