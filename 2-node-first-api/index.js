const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/now", (req, res) => {
  res.send(new Date(Date.now()).toLocaleString());
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
