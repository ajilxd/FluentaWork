import { IUser } from "../../entities/IUser";
import { ObjectId } from "mongoose";

export interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  findById(id: ObjectId): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  updateById(id: ObjectId, user: Partial<IUser>): Promise<IUser | null>;
  blockById(id: ObjectId): Promise<void>;
}
