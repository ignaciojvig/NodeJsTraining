const express = require("express");
const router = express.Router();

const helloWorldService = require("../services/helloworld.service");

router.get("/", (req, res) => {
  res.send(helloWorldService.getTexts());
});

router.post("/", (req, res) => {
  const sentMessage = helloWorldService.addText(req.body.message);
  res.send(sentMessage);
});

module.exports = router;
