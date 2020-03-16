const express = require("express");

const routeSetup = require("./routes");

let app = express();
app = routeSetup(app);

module.exports = app;
