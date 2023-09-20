import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
});

export const Post = mongoose.model('Post', postSchema);
