import config from "../config";

class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${+statusCode >= 400}` ? "fail" : "error";
    this.isOperational = true;

    config.NODE_ENV === "developement" &&
      Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
