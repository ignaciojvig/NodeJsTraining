const express = require("express");
const router = express.Router();

const helloWorldService = require("../services/helloworld.service");

const { messageValidation } = require("../validators/validators");
const validationMiddleware = require("../validators/validation.middleware");

router.get("/", (req, res) => {
  res.send(helloWorldService.getTexts());
});

router.post("/", [messageValidation(), validationMiddleware], (req, res) => {
  const sentMessage = helloWorldService.addText(req.body.message);
  res.send(sentMessage);
});

module.exports = router;
