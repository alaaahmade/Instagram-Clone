import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    login: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: false,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model('User', userSchema);
