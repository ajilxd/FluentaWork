import { Request, Response, NextFunction } from "express";
import { IOwnerController } from "../interface/IOwnerController";
import OwnerService from "../../services/implementation/OwnerService";
import { IOwnerService } from "../../services/interface";
import { catchAsync } from "../../errors/catchAsyc";
import { generateToken } from "../../utils";

class OwnerController implements IOwnerController {
  private OwnerService: IOwnerService;

  constructor(OwnerService: IOwnerService) {
    this.OwnerService = OwnerService;
  }

  registerOwner = catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      console.log("hiii iam register owner");
      const owner = await this.OwnerService.createOwner(req.body);
      const { name, email } = owner;
      res.status(201).json({ success: true, data: { name, email } });
    }
  );

  loginUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      const { email, password } = req.body;
      if (email && password) {
        const validUser = await this.OwnerService.checkOwner(email, password);
        if (!validUser)
          return res
            .status(400)
            .json({ status: "fail", message: "invalid email or password" });
        if (validUser) {
          const token = await generateToken(validUser);
          res
            .status(200)
            .cookie("token", token, {
              httpOnly: true,
            })
            .json({ status: "success", message: "succesful login" });
        }
      }
    }
  );

  logout = catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
      });
      res
        .status(200)
        .json({ status: "success", message: "Logout went succesfull" });
    }
  );
}

export default new OwnerController(OwnerService);
