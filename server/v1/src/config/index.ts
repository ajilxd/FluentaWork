import dotenv from "dotenv";
import { iconfig } from "../types";
dotenv.config();
const config: iconfig = {
  PORT: Number(process.env.PORT) || 3000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "godisgreat",
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/default",
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;
