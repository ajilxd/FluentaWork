import { Schema, model } from "mongoose";
import { ISubscription } from "../entities/ISubscription";

const SubscriptionSchema: Schema<ISubscription> = new Schema(
  {
    validity: { type: String, required: true },
    amount: { type: String, required: true },
    spec: {
      managerCount: { type: String, required: false },
      spacesCount: { type: String, required: false },
    },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const Subscription = model<ISubscription>(
  "Subscription",
  SubscriptionSchema
);
