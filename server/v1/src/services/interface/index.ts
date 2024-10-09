import { IAdmin } from "../../entities/IAdmin";
import { IOwner } from "../../entities/IOwner";
import { ISubscription } from "../../entities/ISubscription";

export interface IOwnerService {
  createOwner(ownerData: IOwner): Promise<IOwner>;
  checkOwner(email: string, password: string): Promise<any | IOwner>;
}

export interface IAdminService {
  checkAdmin(email: string): Promise<any>;
}

export interface ISubscriptionService {
  createSubcription(subascriptionData: ISubscription): Promise<ISubscription>;
  showAll(): Promise<ISubscription[]>;
}
