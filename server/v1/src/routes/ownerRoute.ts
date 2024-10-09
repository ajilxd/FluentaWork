import { Router } from "express";
import OwnerController from "../controllers/implementation/OwnerController";
import Validator from "../utils/validator";
import { ownerValidationSchema } from "../validation/schema";
export const ownerRouter = Router();

ownerRouter.post(
  "/register-account",
  Validator(ownerValidationSchema),
  OwnerController.registerOwner
);
ownerRouter.post("/login", OwnerController.loginUser);
ownerRouter.get("/logout", OwnerController.logout);
