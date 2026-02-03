import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const commentSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    enum: ['POST', 'REEL'],
    required: true,
  },
  liked_id: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: this.type,
    required: true,
  },
});

export const Comment = mongoose.model('Comment', commentSchema);
