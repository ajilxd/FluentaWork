import { IAdmin } from "../../entities/IAdmin";

export interface IAdminRepository {
  findByEmail(email: string): Promise<any>;
}
