const winston = require("winston");
const userLogger = require("./logger.js");

const loggerMiddleware = (req, res, next) => {
  userLogger.info("Request received", {
    method: req.method,
    url: req.url,
  });
  res.on("finish", () => {
    userLogger.info("Response Sent", {
      status: res.statusCode,
      responseTime: Date.now() - req.startTime,
    });
  });
  req.startTime = Date.now();

  next();
};
module.exports = { loggerMiddleware };
