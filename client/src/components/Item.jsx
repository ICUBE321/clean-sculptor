import React, { useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom"; // Import BrowserRouter and Link
import PickListModal from "./PickListModal";
import NewListModal from "./NewListModal";

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

const Item = () => {
  let foodItem = {
    id: "food_bmyxrshbfao9s1amjrvhoauob6mo",
    name: "Chicken",
    alias: "chicken",
    image:
      "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
    protein: 18.6,
    carbs: 0.0,
    fats: 15.1,
  };
  console.log(foodItem);

  // for pick list modal
  const [isPickListModalOpen, setIsPickListModalOpen] = useState(false);

  const openPickListModal = () => setIsPickListModalOpen(true);
  const closePickListModal = () => setIsPickListModalOpen(false);

  // for new list modal
  const [isNewListModalOpen, setIsNewListModalOpen] = useState(false);

  const openNewListModal = () => setIsNewListModalOpen(true);
  const closeNewListModal = () => setIsNewListModalOpen(false);

  return (
    <div className="flex flex-row items-center w-full">
      <PickListModal
        isOpen={isPickListModalOpen}
        closeModal={closePickListModal}
        createList={openNewListModal}
      />
      <NewListModal
        isOpen={isNewListModalOpen}
        closeModal={closeNewListModal}
      />
      <Link
        to="/search"
        type="button"
        className="self-start text-darkblue bg-transparent hover:bg-darkblue hover:text-darkbg focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-lg p-2.5 text-center inline-flex items-center me-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </Link>
      <div className="grow flex flex-row p-10">
        <div className="p-10 w-1/3">
          <img
            className="w-full rounded-full"
            src={foodItem.image}
            alt={foodItem.alias}
          />
        </div>
        <div className="p-4 leading-normal w-full">
          <h2 className="text-7xl font-bold dark:text-darkgray mb-5">
            {foodItem.name}
          </h2>
          <div className="flex">
            <p className="text-2xl dark:text-darkblue mr-5">
              Protein: {foodItem.protein}g
            </p>
            <p className="text-2xl dark:text-darkblue mr-5">
              Carbs: {foodItem.carbs}g
            </p>
            <p className="text-2xl dark:text-darkblue mr-5">
              Fats: {foodItem.fats}g
            </p>
          </div>
          <div className="mb-5">
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-1/5 text-sm text-darkblue bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option defaultChecked>Choose a unit</option>
              <option value="grams">g</option>
              <option value="kilograms">kg</option>
            </select>
          </div>
          <div className="text-darkblue">
            <label htmlFor="number-input" className="text-sm mr-3">
              Choose quantity:
            </label>
            <input
              type="number"
              name=""
              id="number-input"
              className="text-sm p-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          openPickListModal();
          console.log(`Modal is ${isPickListModalOpen}`);
        }}
        className="self-end text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-lightblue dark:text-gray dark:hover:text-darkblue dark:hover:bg-lightblue dark:focus:ring-blue-800"
      >
        ADD ITEM
      </button>
    </div>
  );
};

export default Item;
