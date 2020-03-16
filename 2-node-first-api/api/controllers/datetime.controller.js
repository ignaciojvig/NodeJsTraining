const express = require("express");
const router = express.Router();

router.get("/now", (req, res) => {
  res.send(new Date(Date.now()).toLocaleString());
});

module.exports = router;
