import { Request, Response, NextFunction } from "express";

export interface ISubscriptionController {
  AddSubscription(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any>;

  ShowSubscriptions(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any>;
}
