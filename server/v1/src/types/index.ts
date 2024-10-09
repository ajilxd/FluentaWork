import { Request, Response, NextFunction } from "express";

interface IAsyncHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface ICatchAsync {
  (fn: IAsyncHandler): (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
}
export interface iconfig {
  PORT: Number;
  JWT_SECRET_KEY: string;
  MONGODB_URI: string;
  NODE_ENV: string;
}
