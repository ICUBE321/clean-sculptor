require("dotenv").config();
const mongoString = process.env.ATLAS_URI;

// const path = require("path");

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

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000", // Backend testing
  "http://localhost:5173", // Frontend development
  "https://clean-sculptor-client.vercel.app", // Deployed client
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // Enable this if cookies are involved
  })
);

// Preflight request handler
app.options("*", cors());

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
