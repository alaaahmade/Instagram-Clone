import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const likesSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['POST', 'STORY', 'REEL', 'COMMENT'],
    required: true,
  },
  liked_id: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: this.type,
    required: true,
  },
});

export const Likes = mongoose.model('Likes', likesSchema);
