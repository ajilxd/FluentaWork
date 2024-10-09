import { ObjectId, Document } from "mongoose";

export interface ICompany extends Document {
  _id: ObjectId;
  industry: string;
  owner: ObjectId;
  name: string;
}
