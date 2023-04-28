const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/Router.js");
const cors = require("cors");
require("dotenv").config();
const configureDetails = require("./config/Config.js");
const Port = configureDetails.configureDetails.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/", router);

app.listen(Port, () => {
  console.log(`Server listening on port ${Port}`);
});
