import { IOwnerRepository } from "../interface/IOwnerRepository";
import { IOwner } from "../../entities/IOwner";
import { Owner } from "../../schemas/ownerSchema";
import { ObjectId } from "mongoose";
import AppError from "../../errors/appError";

class OwnerRepository implements IOwnerRepository {
  async create(owner: IOwner): Promise<IOwner> {
    try {
      const newOwner = new Owner(owner);
      return await newOwner.save();
    } catch (err) {
      throw new AppError("Internal server error", 500);
    }
  }

  async findById(id: ObjectId): Promise<IOwner | null> {
    return await Owner.findById(id).exec();
  }

  async findByEmail(email: string): Promise<IOwner | null> {
    return await Owner.findOne({ email }).exec();
  }

  async findAll(): Promise<IOwner[]> {
    return await Owner.find().exec();
  }

  async updateById(
    id: ObjectId,
    owner: Partial<IOwner>
  ): Promise<IOwner | null> {
    return await Owner.findByIdAndUpdate(id, owner, { new: true }).exec();
  }

  async blockById(id: ObjectId): Promise<void> {
    await Owner.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    ).exec();
  }
}

export default new OwnerRepository();
