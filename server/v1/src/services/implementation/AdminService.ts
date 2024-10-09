import AppError from "../../errors/appError";
import AdminRepository from "../../repositories/implementations/AdminRepository";
import { IAdminRepository } from "../../repositories/interface/IAdminRepository";
import { IAdminService } from "../interface";
import { IAdmin } from "../../entities/IAdmin";

class AdminService implements IAdminService {
  private AdminRepository: IAdminRepository;
  constructor(AdminRepository: IAdminRepository) {
    this.AdminRepository = AdminRepository;
  }
  async checkAdmin(email: string): Promise<Boolean | IAdmin> {
    try {
      const validAdmin = await this.AdminRepository.findByEmail(email);

      if (validAdmin && validAdmin.email) {
        return validAdmin;
      } else {
        return false;
      }
    } catch (err) {
      throw new AppError("Internal server error", 500);
    }
  }
}

export default new AdminService(AdminRepository);
