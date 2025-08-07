const path = require("path");
require("dotenv").config({
  path: path.resolve(
    __dirname,
    `.env.${process.env.NODE_ENV || "development"}`
  ),
});
const mongoString = process.env.MONGO_URI;

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
app.post("/login", user.loginUser);
app.get("/users", user.getUsers);
app.get("/users/:id", user.getUserById);
app.post("/users", user.createUser);
app.put("/users/:id", user.updateUser);
app.delete("/users/:id", user.deleteUser);

// food endpoints
app.get("/food_lists/all", food.getAllUserFoodLists);
app.get("/food_list", food.getSpecificFoodList);
app.post("/food", food.saveFoodToList);
app.post("/foods", food.saveSpecificFoodList);
app.post("/foods/empty", food.createEmptyFoodList);
app.post("/food_list/update", food.updateSpecificFoodList);
app.post("/food/update", food.updateFoodItem);
app.delete("/food", food.deleteFoodFromList);
app.delete("/food_list", food.deleteFoodList);

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
