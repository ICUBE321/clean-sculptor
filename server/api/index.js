require("dotenv").config();
const mongoString = process.env.ATLAS_URI;

// const path = require("path");

const express = require("express");
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

// Serve static files from the 'dist' directory
// app.use(express.static(path.join(__dirname, "../client/dist")));

// Route for serving the login page
// app.get("/login", (req, res) => {
// res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

// app.use(cooskieParser());

const user = require("../routes/user");
const food = require("../routes/food");
const port = 3000;

// cors middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.get("/api", function (request, response) {
  response.json({ info: "Node.js, Express, and MongoDb API" });
});

// user endpoints
app.post("/api/login", user.loginUser);
app.get("/api/users", user.getUsers);
app.get("/api/users/:id", user.getUserById);
app.post("/api/users", user.createUser);
app.put("/api/users/:id", user.updateUser);
app.delete("/api/users/:id", user.deleteUser);

// food endpoints
// app.get("/foods/:name", food.searchFood);
//app.get("/foods", );
app.get("/api/foods/all", food.getAllFoodLists);
app.get("/api/foods", food.getFoodList);
// app.post("/foods", food.saveFood);
app.post("/api/foods", food.saveFoodList);
//app.put("/users/:id", user.updateUser);
app.delete("/api/foods", food.deleteFood);

app.listen(port, function () {
  console.log("App running on port ".concat(port, "."));
});
