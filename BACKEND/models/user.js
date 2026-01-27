// BACKEND/models/user.js
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },

    phoneNumber: {
      type: String,
      required: function () {
        return this.role === 'user';
      },
    },

    buildingName: {
      type: String,
      required: function () {
        return this.role === 'user';
      },
    },

    roomNumber: {
      type: String,
      required: function () {
        return this.role === 'user';
      },
    },

    bagNumber: {
      type: String,
      required: function () {
        return this.role === 'user';
      },
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // important for security
    },

    role: {
      type: String,
      enum: ['admin', 'user', 'worker'],
      default: 'user',
    },

    address: {
      type: String,
      default: '',
    },

    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
