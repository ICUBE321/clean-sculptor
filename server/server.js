require("dotenv").config();
const mongoString = process.env.ATLAS_URI;

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

// app.use(cooskieParser());

const user = require("./routes/user");
const food = require("./routes/food");
const port = 3000;

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
app.get("/foods/:name", food.searchFood);
//app.get("/foods", );
app.get("/foods", food.getFoodList);
app.post("/foods", food.saveFood);
//app.put("/users/:id", user.updateUser);
app.delete("/foods", food.deleteFood);

app.listen(port, function () {
  console.log("App running on port ".concat(port, "."));
});
