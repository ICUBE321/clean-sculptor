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
    const foodList = await foodListModel.findOne({
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
  let listExists = await foodListModel.exists({
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
          alias: request.body.foods[0].alias,
          image: request.body.foods[0].image,
          calories: request.body.foods[0].calories,
          unit: request.body.foods[0].unit,
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

const saveFoodToList = async (request, response) => {
  // find the food document using user id
  const userId = request.body.userId;
  const listName = request.body.listName;
  let listExists = await foodListModel.exists({
    userId: userId,
    listName: listName,
  });

  console.log(
    `userId: ${userId}, listName: ${listName}, listExists: ${listExists}`
  );

  if (!listExists) {
    response.status(400).json({ message: "This list does not exist." });
  } else {
    // add food to list
    let newFood = {
      name: request.body.food.name,
      alias: request.body.food.alias,
      image: request.body.food.image,
      calories: request.body.food.calories,
      unit: request.body.food.unit,
      carbs: request.body.food.carbs,
      protein: request.body.food.protein,
      fats: request.body.food.fats,
    };

    console.log(
      `Adding food ${newFood.name} to list ${listName} for user ${userId}`
    );

    try {
      const updatedList = await foodListModel.findOneAndUpdate(
        { userId: userId, listName: listName },
        { $push: { foods: newFood } },
        { new: true }
      );
      response.status(200).json(updatedList);
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
  getAllUserFoodLists,
  getFoodList,
  saveFoodList,
  saveFoodToList,
  deleteFood,
};
