import mongoose, { Schema } from "mongoose";
import { IUser } from "../entities/IUser";
const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    spaceId: { type: Schema.Types.ObjectId, ref: "Space", required: true },
    isAvailable: { type: Boolean, default: true },
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
