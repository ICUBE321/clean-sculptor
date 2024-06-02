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
    edamamApiCallFoodList();
    // You can also send the data to your backend server for authentication
  };

  // To get the list of related foods
  function edamamApiCallFoodList() {
    let url = `https://api.edamam.com/api/food-database/v2/parser?app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d&ingr=${food}`;
    axios
      .get(url)
      .then((response) => {
        parseFoodResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // To get data on specific user-selected food
  function edamamApiCallFoodData() {
    let url =
      "https://api.edamam.com/api/food-database/v2/nutrients?app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d";
    axios.post(url, {});
  }

  //qualifiers: foodItem.measures[0].qualified[0]?.qualifiers[0]?.uri
  // For parsing list of meals gotten in response
  function parseFoodResponse(foodResponse) {
    let parsedFoodList = foodResponse.hints.map((foodItem) => {
      console.log(foodItem);
      let qualifiers = "";
      for (const qualified in foodItem.measures[0]) {
        if (qualified === "qualified") {
          qualifiers = new Array(
            foodItem.measures[0].qualified[0].qualifiers[0].uri
          );
        }
      }
      return {
        id: foodItem.food.foodId,
        name: foodItem.food.label,
        alias: foodItem.food.knownAs,
        image: foodItem.food.image,
        ingredients: new Array({
          quantity: foodItem.measures[0].weight,
          measureURI: foodItem.measures[0].uri,
          qualifiers: qualifiers,
          foodId: foodItem.food.foodId,
        }),
      };
    });
    console.log(parsedFoodList);
    setFoodData(parsedFoodList);
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
              <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">Foods</h2>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {foodData.map((foodItem) => (
                      <a key={foodItem.id} href="" className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={foodItem.image}
                            alt={foodItem.alias}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                          {foodItem.name}
                        </h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                          {}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
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
