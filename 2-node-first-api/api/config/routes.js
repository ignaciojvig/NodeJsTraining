const routeSetup = app => {
  const helloWorldController = require("../controllers/helloworld.controller");
  const dateTimeController = require("../controllers/datetime.controller");

  app.use("/hello-world", helloWorldController);
  app.use("/datetime", dateTimeController);

  return app;
};

module.exports = routeSetup;
