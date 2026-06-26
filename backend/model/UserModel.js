const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  mobilenumber:{
    type: String,
    required: [true, "Your mobile number is required"],
  },
  dob: {
    type: Date,
    required: [true, "Your date of birth is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    delete returnedObject.password;
    delete returnedObject.__v;
    return returnedObject;
  },
});

module.exports = mongoose.model("User", userSchema);
