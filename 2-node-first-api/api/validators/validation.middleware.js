const { validationResult } = require("express-validator");

// Must be the LAST MIDDLEWARE in Validation Process
module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json(errors);
  }

  next();
};
