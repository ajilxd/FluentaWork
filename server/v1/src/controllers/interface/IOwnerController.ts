import { Request, Response, NextFunction } from "express";

export interface IOwnerController {
  registerOwner(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> | void;
}
