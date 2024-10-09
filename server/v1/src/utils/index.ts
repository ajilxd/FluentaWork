import mongoose from "mongoose";
import config from "../config";
import jwt from "jsonwebtoken";

export const connectMongodb = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
  } catch (err) {
    console.log({
      message: "mongodb connection error",
      error: err,
    });
    process.exit(1);
  }
};

export const generateToken = async (user: any): Promise<any> => {
  try {
    const token = jwt.sign(
      {
        id: user._id,
        user: user.name,
        email: user.email,
        role: user.role,
      },
      config.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    return token;
  } catch (err) {
    console.log(err);
  }
};
