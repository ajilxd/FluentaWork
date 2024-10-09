import { Request, Response, NextFunction } from "express";
import { IAdminController } from "../interface/IAdminController";
import AdminService from "../../services/implementation/AdminService";
import { IAdminService } from "../../services/interface";
import { catchAsync } from "../../errors/catchAsyc";
import { generateToken } from "../../utils";

class AdminController implements IAdminController {
  private AdminService: IAdminService;
  constructor(AdminService: IAdminService) {
    this.AdminService = AdminService;
  }

  loginAdmin = catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const { email } = req.body;
      if (email) {
        const validAdmin = await this.AdminService.checkAdmin(email);
        if (validAdmin) {
          const token = await generateToken({
            ...validAdmin,
            ...{ role: "admin" },
          });
          res
            .status(200)
            .cookie("token", token, { httpOnly: true })
            .json({ status: "success", message: "Succesfull login" });
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

export default new AdminController(AdminService);
