import React, { useState } from "react";
import axios from "axios";

const SearchFood = () => {
  // State variables to store user input and validation status
  const [food, setFood] = useState("");
  const [foodData, setFoodData] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform api call to get the meals info
    console.log("Food:", food);
    edamamApiCall();
    // You can also send the data to your backend server for authentication
  };

  function edamamApiCall() {
    let url = `https://api.edamam.com/api/food-database/v2/parser?app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d&ingr=${food}`;
    axios
      .get(url)
      .then((response) => {
        parseFoodResponse(response.data);
        setFoodData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function parseFoodResponse(foodResponse) {
    let foodHintsResp = foodResponse.hints;
    console.log(foodHintsResp);

    for (let fooditem of foodHintsResp) {
      console.log(fooditem.food);
    }

    console.log(foodHintsResp.length);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Find a food item
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="food-item" className="sr-only">
                Food item
              </label>
              <input
                id="food-item"
                name="food-item"
                type="text"
                autoComplete="food-item"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Chicken"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Find
            </button>
          </div>
          <div>
            {foodData ? (
              <div>{JSON.stringify(foodData)}</div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFood;
