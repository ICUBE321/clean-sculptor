import React, { useState } from "react";

// selectedFood format:
//id: foodItem.food.foodId,
// name: foodItem.food.label,
// alias: foodItem.food.knownAs,
// image: foodItem.food.image,
// ingredients: new Array({
//   quantity: foodItem.measures[0].weight,
//   measureURI: foodItem.measures[0].uri,
//   qualifiers: qualifiers,
//   foodId: foodItem.food.foodId,

const Item = ({ foodItem }) => {
  console.log(foodItem);
  //console.log(foodItem.ingredients);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={foodItem.image}
          alt={foodItem.alias}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {foodItem.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Carbs: {foodItem.carbs}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Protein: {foodItem.protein}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Fats: {foodItem.fats}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </a>
      </div>
    </div>
  );
};

export default Item;
