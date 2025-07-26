const { body, param, validationResult, escape } = require("express-validator");

// validation chains
const saveFoodValidation = [
  body("userId").notEmpty().escape().withMessage("User ID is required"),
  body("listName").notEmpty().escape().withMessage("List name is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const getFoodsValidation = [
  param("userId").isMongoId().withMessage("Invalid user ID"),
  param("listName").notEmpty().escape().withMessage("List name is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const deleteFoodValidation = [
  param("userId").isMongoId().withMessage("Invalid user ID"),
  param("foodId").isMongoId().withMessage("Invalid food ID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  saveFoodValidation,
  getFoodsValidation,
  deleteFoodValidation,
};
