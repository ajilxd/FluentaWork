import { IAdminRepository } from "../interface/IAdminRepository";
import { IAdmin } from "../../entities/IAdmin";
import { Admin } from "../../schemas/adminSchema";
import { ObjectId } from "mongoose";
import AppError from "../../errors/appError";

class AdminRepository implements IAdminRepository {
  async findByEmail(email: string): Promise<any> {
    try {
      return await Admin.findOne({ email }).exec();
    } catch (err) {
      throw new AppError("Internal server error", 500);
    }
  }
}
export default new AdminRepository();
