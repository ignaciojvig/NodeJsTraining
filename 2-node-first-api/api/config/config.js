const express = require("express");
const bodyParser = require("body-parser");

const routeSetup = require("./routes");

let app = express();
app.use(bodyParser.json());

app = routeSetup(app);

module.exports = app;
