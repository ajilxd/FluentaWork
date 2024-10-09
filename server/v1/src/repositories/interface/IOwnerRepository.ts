import { ObjectId } from "mongoose";
import { IOwner } from "../../entities/IOwner";

export interface IOwnerRepository {
  create(owner: IOwner): Promise<IOwner>;
  findById(id: ObjectId): Promise<IOwner | null>;
  findByEmail(email: string): Promise<IOwner | null>;
  findAll(): Promise<IOwner[]>;
  updateById(id: ObjectId, user: Partial<IOwner>): Promise<IOwner | null>;
  blockById(id: ObjectId): Promise<void>;
}
