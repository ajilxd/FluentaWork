import { Schema, model } from "mongoose";
import { IAdmin } from "../entities/IAdmin";

const AdminSchema: Schema<IAdmin> = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const Admin = model<IAdmin>("Admin", AdminSchema);
