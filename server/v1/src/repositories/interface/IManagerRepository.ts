import { ObjectId } from "mongoose";
import { IManager } from "../../entities/IManager";

export interface IManagerRepository {
  create(owner: IManager): Promise<IManager>;
  findById(id: ObjectId): Promise<IManager | null>;
  findByEmail(email: string): Promise<IManager | null>;
  findAll(): Promise<IManager[]>;
  updateById(id: ObjectId, user: Partial<IManager>): Promise<IManager | null>;
  blockById(id: ObjectId): Promise<void>;
}
