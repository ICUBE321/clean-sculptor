const {
  body,
  param,
  query,
  validationResult,
  escape,
} = require("express-validator");

// validation chains
const saveFoodToListValidation = [
  body("userId").notEmpty().escape().withMessage("User ID is required"),
  body("userId").isMongoId().escape().withMessage("Invalid user ID"),
  body("listId").notEmpty().escape().withMessage("List ID is required"),
  body("listId").isMongoId().escape().withMessage("Invalid list ID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const saveFoodListValidation = [
  body("userId").notEmpty().escape().withMessage("User ID is required"),
  body("userId").isMongoId().escape().withMessage("Invalid user ID"),
  body("listName").notEmpty().escape().withMessage("List name is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const updateFoodListValidation = [
  body("userId").notEmpty().escape().withMessage("User ID is required"),
  body("userId").isMongoId().escape().withMessage("Invalid user ID"),
  body("listId").notEmpty().escape().withMessage("List ID is required"),
  body("listId").isMongoId().escape().withMessage("Invalid list ID"),
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
  query("userId").notEmpty().escape().withMessage("User ID is required"),
  query("userId").isMongoId().escape().withMessage("Invalid user ID"),

  query("listId").notEmpty().escape().withMessage("List ID is required"),
  query("listId").isMongoId().escape().withMessage("Invalid list ID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const getAllUserFoodsValidation = [
  query("userId").notEmpty().withMessage("User ID is required"),
  query("userId").isMongoId().withMessage("Invalid user ID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const deleteFoodValidation = [
  query("userId").notEmpty().withMessage("User ID is required"),
  query("userId").isMongoId().withMessage("Invalid user ID"),
  query("listId").notEmpty().withMessage("List ID is required"),
  query("listId").isMongoId().withMessage("Invalid list ID"),
  query("foodName").notEmpty().withMessage("Food name is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const deleteFoodListValidation = [
  query("userId").notEmpty().withMessage("User ID is required"),
  query("userId").isMongoId().withMessage("Invalid user ID"),
  query("listId").notEmpty().withMessage("List ID is required"),
  query("listId").isMongoId().withMessage("Invalid list ID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  saveFoodListValidation,
  saveFoodToListValidation,
  updateFoodListValidation,
  getFoodsValidation,
  getAllUserFoodsValidation,
  deleteFoodValidation,
  deleteFoodListValidation,
};
