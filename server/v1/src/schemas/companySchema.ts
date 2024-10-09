import { Schema, model } from "mongoose";
import { ICompany } from "../entities/ICompany";

const CompanySchema: Schema<ICompany> = new Schema(
  {
    industry: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "Owner", required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const Company = model<ICompany>("Company", CompanySchema);
