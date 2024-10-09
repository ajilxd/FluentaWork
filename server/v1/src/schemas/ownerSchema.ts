import { Schema, model } from "mongoose";
import { IOwner } from "../entities/IOwner";
import bcrypt from "bcryptjs";
import AppError from "../errors/appError";

const OwnerSchema: Schema<IOwner> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subscriptionId: {
      type: Schema.Types.ObjectId,
      ref: "Subscription",
      required: false,
    },
  },
  { timestamps: true }
);

OwnerSchema.pre<IOwner>("save", async function (next): Promise<any> {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.log(error);
    throw new AppError("Internal server error", 500);
  }
});

OwnerSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const Owner = model<IOwner>("Owner", OwnerSchema);
