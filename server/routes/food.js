require("express");

const { options } = require("nodemon/lib/config");
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
const getAllUserFoodLists = async (request, response) => {
  const userId = request.query.userId;
  try {
    const allFoodLists = await foodListModel.find({ userId: userId });
    return response.status(200).json(allFoodLists);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

// to retrieve a user's specific food list
const getSpecificFoodList = async (request, response) => {
  const userId = request.query.userId;
  const listId = request.query.listId;
  try {
    const foodList = await foodListModel.findOne({
      userId: userId,
      _id: listId,
    });

    if (foodList) {
      return response.status(200).json(foodList);
    } else {
      // found nothing
      return response.status(400).json({ message: "This list does not exist" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

// to save a new food list including the food items in it
const saveSpecificFoodList = async (request, response) => {
  const { userId, listName, foods } = request.body;

  try {
    const listExists = await foodListModel.exists({ userId, listName });
    if (listExists) {
      // return to the user a message saying the list name already exists
      return response
        .status(400)
        .json({ message: "This list name is already in use." });
    } else {
      // map food items first
      const formattedFoods = foods.map((food) => ({
        name: food.name,
        alias: food.alias,
        image: food.image,
        calories: food.calories,
        unit: food.unit,
        carbs: food.carbs,
        protein: food.protein,
        fats: food.fats,
      }));

      //create a new list object and save it
      const newFoodList = new foodListModel({
        userId,
        listName,
        foods: formattedFoods,
      });

      console.log(newFoodList);

      const savedList = await newFoodList.save();
      return response.status(200).json(savedList);
    }
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

// function to save a food item to a specific list
const saveFoodToList = async (request, response) => {
  const { userId, listId, food } = request.body;

  try {
    let listExists = await foodListModel.exists({
      userId,
      _id: listId,
    });

    console.log(
      `userId: ${userId}, listName: ${listId}, listExists: ${listExists}`
    );

    if (!listExists) {
      return response
        .status(400)
        .json({ message: "This list does not exist." });
    } else {
      console.log(
        `Adding food ${food.name} to list ${listId} for user ${userId}`
      );
      const updatedList = await foodListModel.findOneAndUpdate(
        { userId, _id: listId },
        { $push: { foods: food } },
        { new: true }
      );
      return response.status(200).json(updatedList);
    }
  } catch (error) {
    return esponse.status(400).json({ message: error.message });
  }
};

// function to create an empty food list
const createEmptyFoodList = async (request, response) => {
  const { userId, listName } = request.body;

  try {
    let listExists = await foodListModel.exists({
      userId: userId,
      listName: listName,
    });

    if (listExists) {
      // return to the user a message saying the list name already exists
      return response
        .status(400)
        .json({ message: "This list name is already in use." });
    } else {
      //create a new list object and save it
      let newFoodList = new foodListModel({
        userId: userId,
        listName: listName,
        foods: [],
      });

      console.log(newFoodList);

      const listToSave = await newFoodList.save();
      return response.status(200).json(listToSave);
    }
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

const deleteFood = async (request, response) => {
  const userId = request.query.userId;
  const foodId = request.query.foodId;

  // const res = await FoodModel.findOneAndDelete({ userId: userId });
  console.log(`food with id:${foodId} to be deleted for user ${userId}`);
  response.send(`food with id:${foodId} to be deleted for user ${userId}`);
};

// function to delete a food list
const deleteList = async (request, response) => {
  const userId = request.query.userId;
  const listId = request.query.listId;

  try {
    const deletedList = await foodListModel.findOneAndDelete({
      userId: userId,
      _id: listId,
    });
    if (deletedList) {
      response.status(200).json({ message: "List deleted successfully." });
    } else {
      response.status(404).json({ message: "List not found." });
    }
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

// function to update a specific food list
const updateSpecificFoodList = async (request, response) => {
  const { userId, listId, listName, foods } = request.body;

  try {
    const updatedList = await foodListModel.findOneAndUpdate(
      { userId, _id: listId },
      { listName: listName, foods: foods },
      { new: true }
    );

    if (updatedList) {
      console.log("Updated list:", updatedList);
      return response.status(200).json(updatedList);
    } else {
      return response.status(404).json({ message: "List not found." });
    }
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

module.exports = {
  searchFood,
  getAllUserFoodLists,
  getSpecificFoodList,
  saveSpecificFoodList,
  saveFoodToList,
  deleteFood,
  createEmptyFoodList,
  deleteList,
  updateSpecificFoodList,
};
