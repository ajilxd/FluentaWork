import winston from "winston";

export const Systemlogger = winston.createLogger({
  level: "info",
  format: winston.format.cli(),
  transports: [new winston.transports.Console()],
});
