const mongoose = require("mongoose");

const openAccountSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },

  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email address is required"],
    lowercase: true,
    trim: true,
  },

  pan: {
    type: String,
    required: [true, "PAN number is required"],
    uppercase: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("OpenAccount", openAccountSchema);