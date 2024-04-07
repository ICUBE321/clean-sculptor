require("express");

const FoodModel = require("../models/foodmodel");

const searchFood = (request, response) => {
  //logic to query food database api for an item
  const name = request.params.name;
  console.log(`${name} was queried for`);
  response.status(200).json({
    name: name,
    carbs: 0,
    protein: 0,
    fats: 0,
  });
};

const getFoods = (request, response) => {
  response.send("Get All Foods");
};

const saveFood = (request, response) => {
  const { name, carbs, protein, fats } = request.body;

  response.send("Save Food");
};

module.exports = {
  searchFood,
};
