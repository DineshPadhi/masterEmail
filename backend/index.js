const express = require("express");
const app = express();
const Port = 3000;
const bodyParser = require("body-parser");
const router = require("./routes/Router.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(Port, () => {
  console.log("Server listening on port 3000");
});
