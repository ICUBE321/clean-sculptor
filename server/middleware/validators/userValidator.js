const { body, param, validationResult } = require("express-validator");

// validation chains
const createUserValidation = [
  // validation rules
  body("name").notEmpty().escape().withMessage("Name is required"),
  body("email").isEmail().escape().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .escape()
    .withMessage("Password must be at least 6 characters long"),

  // validation middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const loginUserValidation = [
  body("email").isEmail().escape().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .escape()
    .withMessage("Password must be at least 6 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const userIdValidation = [
  param("userId").isMongoId().withMessage("Invalid user ID"),
  param("userId").notEmpty().withMessage("User ID is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  createUserValidation,
  loginUserValidation,
  userIdValidation,
};
