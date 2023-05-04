const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");

const myData = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send(myData);
});

app.listen(port, () => {
  console.log(`Chefs data are running on ${port}`);
});
