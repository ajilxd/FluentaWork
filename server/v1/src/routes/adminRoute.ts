import { Router } from "express";
import AdminController from "../controllers/implementation/AdminController";
import SubscriptionController from "../controllers/implementation/SubscriptionController";
import Authencticate from "../utils/Authenticate";
import AuthorizeRole from "../utils/Authorize";

export const adminRouter = Router();

adminRouter.post("/login", AdminController.loginAdmin);
adminRouter.get("/logout", AdminController.logout);
adminRouter.post("/addsubscription", SubscriptionController.AddSubscription);
adminRouter.get(
  "/subscriptions",
  Authencticate,
  SubscriptionController.ShowSubscriptions
);
