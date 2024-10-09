import { Router } from "express";
import AdminController from "../controllers/implementation/AdminController";
import SubscriptionController from "../controllers/implementation/SubscriptionController";
import Authencticate from "../utils/Authenticate";
import AuthorizeRole from "../utils/Authorize";
import Validator from "../utils/validator";
import { subscriptionValidationSchema } from "../validation/schema";

export const adminRouter = Router();

adminRouter.post("/login", AdminController.loginAdmin);
adminRouter.get("/logout", AdminController.logout);
adminRouter.post(
  "/addsubscription",
  Authencticate,
  AuthorizeRole("admin"),
  Validator(subscriptionValidationSchema),
  SubscriptionController.AddSubscription
);
adminRouter.get(
  "/subscriptions",
  Authencticate,
  AuthorizeRole("admin"),
  SubscriptionController.ShowSubscriptions
);
