import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const messageSchema = {
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
};

const chatSchema = new mongoose.Schema({
  user1_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user2_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  messages: {
    type: [messageSchema],
    required: false,
  },
});

export const Chat = mongoose.model('Chat', chatSchema);
