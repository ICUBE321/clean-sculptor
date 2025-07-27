require("dotenv").config();
const mongoString = process.env.ATLAS_URI;

const express = require("express");
const cors = require("cors");
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

const app = express();
app.use(express.json());

// app.use(cooskieParser());

const user = require("./routes/user");
const food = require("./routes/food");

const {
  createUserValidation,
  loginUserValidation,
  userIdValidation,
} = require("./middleware/validators/userValidator");

const {
  saveFoodValidation,
  getFoodsValidation,
  deleteFoodValidation,
} = require("./middleware/validators/foodValidator");

const port = process.env.PORT;

//define the CORS options
const corsOptions = {
  credentials: true,
  origin: [process.env.SERVER_DOMAIN, process.env.CLIENT_DOMAIN], //the whitelisted domains
};

app.use(cors(corsOptions));

//Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.get("/", function (request, response) {
  response.json({ info: "Node.js, Express, and MongoDb API" });
});

// user endpoints
app.post("/login", loginUserValidation, user.loginUser);
app.get("/users", user.getUsers);
app.get("/users/:id", userIdValidation, user.getUserById);
app.post("/users", createUserValidation, user.createUser);
app.put("/users/:id", userIdValidation, user.updateUser);
app.delete("/users/:id", userIdValidation, user.deleteUser);

// food endpoints
// app.get("/foods/:name", food.searchFood);
//app.get("/foods", );
app.get("/foods/all", getFoodsValidation, food.getAllFoodLists);
app.get("/foods", getFoodsValidation, food.getFoodList);
// app.post("/foods", food.saveFood);
app.post("/foods", saveFoodValidation, food.saveFoodList);
//app.put("/users/:id", user.updateUser);
app.delete("/foods", deleteFoodValidation, food.deleteFood);

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
