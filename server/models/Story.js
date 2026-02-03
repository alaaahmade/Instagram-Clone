import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const storySchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  audio: {
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
  tags: {
    type: [String],
    required: false,
  },
});

export const Story = mongoose.model('Story', storySchema);
