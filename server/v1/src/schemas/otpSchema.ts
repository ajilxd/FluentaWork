import { Schema, model } from "mongoose";
import { IOtp } from "../entities/IOtp";

const OtpSchema: Schema<IOtp> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    otp: { type: String, required: true },
  },
  { timestamps: true }
);

export const Otp = model<IOtp>("Otp", OtpSchema);
