import { ObjectId, Document } from "mongoose";

export interface ISubscription extends Document {
  _id: ObjectId;
  validity: string;
  amount: string;
  spec: {
    managerCount?: string;
    spacesCount?: string;
  };
  name: string;
}
