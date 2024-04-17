require("express");

const { options } = require("nodemon/lib/config");
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

const getFoodList = async (request, response) => {
  const userId = request.query.userId;
  try {
    const foodList = await FoodModel.where("userId").equals(userId);
    // console.log(`user id searched for is ${userId}. Food found is ${foodList}`);
    response.json(foodList);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const saveFood = async (request, response) => {
  // find the food document using user id
  const userId = request.body.userId;
  const foodId = await FoodModel.exists({ userId: userId });
  console.log(`does food id for user id ${userId} is: ${foodId}`);
  // and if it exists
  if (foodId == null) {
    //if null add new food document
    let food = new FoodModel({
      userId: userId,
      foods: [
        {
          name: request.body.name,
          carbs: request.body.carbs,
          protein: request.body.protein,
          fats: request.body.fats,
        },
      ],
    });

    try {
      const foodToSave = await food.save();
      response.status(200).json(foodToSave);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  } else {
    // append new food item to the foods list, else create new doc
    let foodItem = {
      name: request.body.name,
      carbs: request.body.carbs,
      protein: request.body.protein,
      fats: request.body.fats,
    };

    try {
      const foodToUpdate = await FoodModel.findByIdAndUpdate(
        foodId,
        { $push: { foods: foodItem } },
        { new: true }
      );
      response.status(200).json(foodToUpdate);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
};

const deleteFood = async (request, response) => {
  const userId = request.query.userId;
  const foodId = request.query.foodId;

  // const res = await FoodModel.findOneAndDelete({ userId: userId });
  console.log(`food with id:${foodId} to be deleted for user ${userId}`);
  response.send(`food with id:${foodId} to be deleted for user ${userId}`);
};

module.exports = {
  searchFood,
  getFoodList,
  saveFood,
  deleteFood,
};
