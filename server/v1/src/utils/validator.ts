import { Request, Response, NextFunction } from "express";
import { errObj } from "../errors/errorMessages";

const Validator =
  (schema: any) =>
  (req: Request, res: Response, next: NextFunction): any => {
    console.log("ajilll");
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "error",
        message: "Validation Error",
        details: error.details[0].message,
      });
    } else {
      next();
    }
  };

export default Validator;
