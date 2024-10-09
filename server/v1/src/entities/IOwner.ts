import { ObjectId, Document } from "mongoose";

export interface IOwner extends Document {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  subscriptionId?: ObjectId;
  comparePassword(enteredPassword: string): Promise<boolean>;
}
