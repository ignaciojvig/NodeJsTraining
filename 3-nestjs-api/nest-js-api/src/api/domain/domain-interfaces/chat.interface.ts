import { Document } from 'mongoose';

export interface IChat extends Document {
  userId: number;
  message: string;
  timestamp: Date;
}
