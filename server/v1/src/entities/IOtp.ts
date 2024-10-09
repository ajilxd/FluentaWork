import { ObjectId, Document } from "mongoose";

export interface IOtp extends Document {
  _id: ObjectId;
  userId: ObjectId;
  otp: string;
  createdAt: string;
  updatedAt: string;
}
