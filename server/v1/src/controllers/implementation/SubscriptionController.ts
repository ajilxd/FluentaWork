import { Request, Response, NextFunction } from "express";
import { ISubscriptionController } from "../interface/ISubscriptionController";
import SubscriptionService from "../../services/implementation/SubscriptionService";
import { ISubscriptionService } from "../../services/interface";
import { catchAsync } from "../../errors/catchAsyc";

class SubscriptionController implements ISubscriptionController {
  private SubscriptionService: ISubscriptionService;
  constructor(SubscriptionService: ISubscriptionService) {
    this.SubscriptionService = SubscriptionService;
  }
  AddSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.SubscriptionService.createSubcription(req.body);
      return res.status(200).json({ status: "success", data: data });
    } catch (error) {
      next(error);
    }
  };

  ShowSubscriptions = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.SubscriptionService.showAll();

      return res.status(200).json({ status: "success", data: data });
    } catch (err) {
      next(err);
    }
  };
}

export default new SubscriptionController(SubscriptionService);
