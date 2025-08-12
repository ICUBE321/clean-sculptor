const path = require("path");
require("dotenv").config({
  path: path.resolve(
    __dirname,
    `.env.${process.env.NODE_ENV || "development"}`
  ),
});
console.log(`Environment: ${process.env.NODE_ENV}`);
const mongoString = process.env.MONGO_URI;

// Database connection starts
const mongoose = require("mongoose");
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
// Database connection ends

const express = require("express");
const app = express();

// Adding security headers
const helmet = require("helmet");
app.use(helmet());

app.use(express.json());

// app.use(cookieParser());

const user = require("./routes/user");
const food = require("./routes/food");

const {
  createUserValidation,
  loginUserValidation,
  userIdValidation,
} = require("./middleware/validators/userValidator");

const {
  getFoodsValidation,
  deleteFoodValidation,
  saveFoodToListValidation,
  saveFoodListValidation,
  getAllUserFoodsValidation,
  updateFoodListValidation,
  deleteFoodListValidation,
} = require("./middleware/validators/foodValidator");

const port = process.env.PORT;

const cors = require("cors");

//define the CORS options
const corsOptions = {
  credentials: true,
  origin: [process.env.SERVER_DOMAIN, process.env.CLIENT_DOMAIN], //the whitelisted domains
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

// Rate limiting
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});

app.use(limiter);

//Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.get("/", function (request, response) {
  response.json({ info: "Welcome to cleanSculptor" });
});

// user endpoints
app.post("/login", loginUserValidation, user.loginUser);
app.get("/users", user.getUsers);
app.get("/users/:id", userIdValidation, user.getUserById);
app.post("/users", createUserValidation, user.createUser);
app.put("/users/:id", userIdValidation, user.updateUser);
app.delete("/users/:id", userIdValidation, user.deleteUser);

// food endpoints
app.get("/food_lists/all", getAllUserFoodsValidation, food.getAllUserFoodLists);
app.get("/food_list", getFoodsValidation, food.getSpecificFoodList);
app.post("/food", saveFoodToListValidation, food.saveFoodToList);
app.post("/foods", saveFoodListValidation, food.saveSpecificFoodList);
app.post("/foods/empty", saveFoodListValidation, food.createEmptyFoodList);
app.post(
  "/food_list/update",
  updateFoodListValidation,
  food.updateSpecificFoodList
);
app.post("/food/update", saveFoodToListValidation, food.updateFoodItem);
app.delete("/food", deleteFoodValidation, food.deleteFoodFromList);
app.delete("/food_list", deleteFoodListValidation, food.deleteFoodList);

// Start the server
app.listen(port, () => {
  console.log(`cleanSculptor running on port ${port}.`);
});
