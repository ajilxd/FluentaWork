import express from "express";
import { errorHandler } from "./errors/errorHandler";
import { connectMongodb } from "./utils";
import config from "./config";
import { ownerRouter } from "./routes/ownerRoute";
import { adminRouter } from "./routes/adminRoute";
import cookieParser from "cookie-parser";
import { Systemlogger } from "./utils/systemLogger";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/owner", ownerRouter);
app.use("/api/v1/admin", adminRouter);
app.use(errorHandler);

connectMongodb();
app.listen(config.PORT, () =>
  Systemlogger.info(`server started running at ${config.PORT}`)
);
