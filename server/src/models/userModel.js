const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  lastName: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },
  guarantor: {
    type: String,
    // required: true,
    default:'none'
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    // unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    type: String,
    required: true,
  
  },
  organisation:{
    type:String,
  },
  role: {
    type: String,
    enum: ["user", "admin","superAdmin"],
    default: "user"
  },
  photoURL: {
    type: String,
    default:
      "https://f0.pngfuel.com/png/340/956/profile-user-icon-png-clip-art-thumbnail.png",
  },
  block: {
    type: Boolean,
    default: false
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  status: {
    type: Number,
    default: 0
  },
  phoneNumber: {
    type: String,
    default:'your phone number'

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isEmailVerified: {
    type: Boolean,
    default: true
  }
});

// Encrypt password using bcrypt

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", UserSchema);
