import { ISubscriptionRepository } from "../../repositories/interface/ISubscriptionRepository";
import { ISubscription } from "../../entities/ISubscription";
import AppError from "../../errors/appError";
import { ISubscriptionService } from "../interface";
import subscriptionRepository from "../../repositories/implementations/SubscriptionRepository";

class SubscriptionService implements ISubscriptionService {
  private subscriptionRepository: ISubscriptionRepository;
  constructor(subscriptionRepository: ISubscriptionRepository) {
    this.subscriptionRepository = subscriptionRepository;
  }

  async createSubcription(
    subascriptionData: ISubscription
  ): Promise<ISubscription> {
    try {
      return await this.subscriptionRepository.create(subascriptionData);
    } catch {
      throw new AppError("Internal server error", 500);
    }
  }

  async showAll(): Promise<ISubscription[]> {
    try {
      console.log("hiii");
      return await this.subscriptionRepository.findAll();
    } catch (err) {
      console.log(err);
      throw new AppError("Internal server error", 500);
    }
  }
}

export default new SubscriptionService(subscriptionRepository);
