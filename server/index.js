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
// app.get("/foods/:name", food.searchFood);
//app.get("/foods", );
app.get("/foods/all", food.getAllFoodLists);
app.get("/foods", food.getFoodList);
// app.post("/foods", food.saveFood);
app.post("/foods", food.saveFoodList);
//app.put("/users/:id", user.updateUser);
app.delete("/foods", food.deleteFood);

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
