import { IOwnerRepository } from "../../repositories/interface/IOwnerRepository";
import { IOwner } from "../../entities/IOwner";
import AppError from "../../errors/appError";
import { IOwnerService } from "../interface";
import OwnerRepository from "../../repositories/implementations/OwnerRepository";

class OwnerService implements IOwnerService {
  private ownerRepository: IOwnerRepository;

  constructor(ownerRepository: IOwnerRepository) {
    this.ownerRepository = ownerRepository;
  }

  async createOwner(ownerData: IOwner) {
    try {
      return await this.ownerRepository.create(ownerData);
    } catch (error) {
      throw new AppError("Error creating owner", 500);
    }
  }

  async checkOwner(email: string, password: string): Promise<IOwner | Boolean> {
    try {
      const owner = await this.ownerRepository.findByEmail(email);
      if (owner && (await owner.comparePassword(password))) {
        return owner;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

export default new OwnerService(OwnerRepository);
