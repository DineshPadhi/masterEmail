const express = require("express");
const app = express();
const Port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/add", (req, res) => {
  res.send("Hello World! add");
});
app.get("/min", (req, res) => {
  res.send("Hello World! min");
});
app.get("/plus", (req, res) => {
  res.send("Hello World! plus");
});
app.get("/divide", (req, res) => {
  res.send("Hello World! plus");
});
app.listen(Port, () => {
  console.log("Server listening on port 3000");
});
