import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const followersSchema = new mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const Followers = mongoose.model('Followers', followersSchema);
