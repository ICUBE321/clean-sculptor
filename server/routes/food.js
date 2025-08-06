require("express");

const { options } = require("nodemon/lib/config");
const FoodListModel = require("../models/foodListModel");
const foodListModel = require("../models/foodListModel");

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

// to retrieve all the user's food lists
const getAllFoodLists = async (request, response) => {
  const userId = request.query.userId;
  try {
    const allFoodLists = await FoodListModel.find({ userId: userId });
    response.json(allFoodLists);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// to retrieve a user's specific food list
const getFoodList = async (request, response) => {
  const userId = request.query.userId;
  const listName = request.query.listName;
  try {
    const foodList = await FoodListModel.findOne({
      userId: userId,
      listName: listName,
    });

    if (foodList) {
      response.json(foodList);
    } else {
      // found nothing
      response.status(400).json({ message: "This list does not exist" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// to save a new foodlist
const saveFoodList = async (request, response) => {
  const userId = request.body.userId;
  const listName = request.body.listName;
  let listExists = await FoodListModel.exists({
    userId: userId,
    listName: listName,
  });
  if (listExists) {
    // return to the user a message saying the list name already exists
    response.status(400).json({ message: "This list name is already in use." });
  } else {
    //create a new list object and save it
    let newFoodList = new foodListModel({
      userId: userId,
      listName: listName,
      foods: [
        {
          name: request.body.foods[0].name,
          carbs: request.body.foods[0].carbs,
          protein: request.body.foods[0].protein,
          fats: request.body.foods[0].fats,
        },
      ],
    });

    console.log(newFoodList);

    try {
      const listToSave = await newFoodList.save();
      response.status(200).json(listToSave);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
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
  getAllFoodLists,
  getFoodList,
  saveFoodList,
  saveFood,
  deleteFood,
};
