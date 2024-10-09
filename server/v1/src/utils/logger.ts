import winston from "winston";
import fs from "fs";
const { combine, timestamp, json, prettyPrint, errors } = winston.format;

if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json(), prettyPrint(), errors({ stack: true })),
  transports: [
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      level: "info",
    }),
  ],
});

export default logger;
