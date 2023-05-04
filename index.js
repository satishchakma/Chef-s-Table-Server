const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");

app.use(cors());

const myData = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send(myData);
});

app.get("/:id", (req, res) => {
  //   console.log(req.params.id);
  const id = req.params.id;
  const foundData = myData.find((item) => item.id === Number(id));
  res.send(foundData);
  //   console.log(foundData);
});

app.listen(port, () => {
  console.log(`Chefs data are running on ${port}`);
});
