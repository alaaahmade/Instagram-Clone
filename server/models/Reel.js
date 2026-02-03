import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const reelSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  audio: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
});

export const Reel = mongoose.model('Reel', reelSchema);
