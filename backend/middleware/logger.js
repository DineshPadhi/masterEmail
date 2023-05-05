const rotateFile = require("winston-daily-rotate-file");
const { createLogger, transports, format, transport } = require("winston");

const emailLogger = createLogger({
  transports: [
    new rotateFile({
      frequency: "id",
      filename: "logs/success_log-%DATE%.log",
      level: "info",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new rotateFile({
      frequency: "id",
      filename: "logs/error_log-%DATE%.log",
      level: "info",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
module.exports = emailLogger;
