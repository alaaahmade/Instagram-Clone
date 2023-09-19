import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const notificationSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export const Notification = mongoose.model('Notification', notificationSchema);
