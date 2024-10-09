import { ObjectId } from "mongoose";
import { ISubscription } from "../../entities/ISubscription";
import { ISubscriptionRepository } from "../interface/ISubscriptionRepository";
import { Subscription } from "../../schemas/subscriptionSchema";

class SubscriptionRepository implements ISubscriptionRepository {
  async create(subscriptionData: ISubscription): Promise<ISubscription> {
    const subscription = new Subscription(subscriptionData);
    return await subscription.save();
  }

  async findById(id: ObjectId): Promise<ISubscription | null> {
    return await Subscription.findById(id).exec();
  }

  async findAll(): Promise<ISubscription[]> {
    console.log(await Subscription.find());
    return await Subscription.find().exec();
  }

  async updateById(
    id: ObjectId,
    subscriptionUpdates: Partial<ISubscription>
  ): Promise<ISubscription | null> {
    return await Subscription.findByIdAndUpdate(id, subscriptionUpdates, {
      new: true,
    }).exec();
  }
}

export default new SubscriptionRepository();
