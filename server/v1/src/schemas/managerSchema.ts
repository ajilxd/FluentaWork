import { Schema, model, Types } from "mongoose";
import { IManager } from "../entities/IManager";
const ManagerSchema: Schema<IManager> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    spaces: [{ type: Schema.Types.ObjectId, ref: "Space", required: false }],
    owner: { type: Schema.Types.ObjectId, ref: "Owner", required: true },
    isBlocked: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

export const Manager = model<IManager>("Manager", ManagerSchema);
