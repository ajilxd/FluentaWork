import { ObjectId, Document } from "mongoose";

export interface IManager extends Document {
  _id: ObjectId;
  name: string;
  email: string;
  image?: string;
  spaces?: ObjectId[];
  owner: ObjectId;
  isBlocked: Boolean;
  createdAt: Date;
  updatedAt: Date;
}
