import { ObjectId } from "mongoose";
import { ISubscription } from "../../entities/ISubscription";

export interface ISubscriptionRepository {
  create(owner: ISubscription): Promise<ISubscription>;
  findById(id: ObjectId): Promise<ISubscription | null>;
  findAll(): Promise<ISubscription[]>;
  updateById(
    id: ObjectId,
    user: Partial<ISubscription>
  ): Promise<ISubscription | null>;
}
