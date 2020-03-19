import { Schema } from 'mongoose';

export const ChatSchema = new Schema({
  userId: Number,
  message: String,
  timestamp: Date,
});
