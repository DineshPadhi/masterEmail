const winston = require("winston");
const userLogger = require("./logger.js");

// middleware to add api logs
const loggerMiddleware = (req, res, next) => {
  // log for the request
  userLogger.info("Request received", {
    method: req.method,
    url: req.url,
  });
  // log for the response

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
