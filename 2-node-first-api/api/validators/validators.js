const { check } = require("express-validator");

// Validation Operators (notEmpty(), isLength())
// Sanitization Operators (trim(), escape())

module.exports = {
  messageValidation: () =>
    check("message")
      .notEmpty()
      .withMessage("Message cannot be empty")
      .trim()
      .escape()
      .isLength({ min: 1, max: 20 })
      .withMessage("The message length must be between 1 and 20")
};
