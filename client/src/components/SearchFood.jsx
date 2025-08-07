import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import BrowserRouter and Link
import PickListModal from "./PickListModal";
import NewListModal from "./NewListModal";

const SearchFood = ({ foodData, setFoodData }) => {
  // for pick list modal
  const [isPickListModalOpen, setIsPickListModalOpen] = useState(false);

  const openPickListModal = () => setIsPickListModalOpen(true);
  const closePickListModal = () => setIsPickListModalOpen(false);

  // for new list modal
  const [isNewListModalOpen, setIsNewListModalOpen] = useState(false);

  const openNewListModal = () => setIsNewListModalOpen(true);
  const closeNewListModal = () => setIsNewListModalOpen(false);

  // State variables to store user input and validation status
  const [queriedFood, setQueriedFood] = useState(""); // user selected fod item
  const [selectedFood, setSelectedFood] = useState({
    id: "",
    name: "",
    alias: "",
    image: "",
    calories: "",
    unit: "",
    protein: "",
    carbs: "",
    fats: "",
  }); //to store the currently selected food data (ingredients object)

  // // Function to handle food search form submission
  const searchForFood = (e) => {
    e.preventDefault();

    console.log("Queried food item:", queriedFood);
    // call function to search for food
    edamamGetRelatedFoods();
  };

  // // To get the list of related foods using edamam api
  const edamamGetRelatedFoods = () => {
    setFoodData([]); // reset foodData state
    let url = `https://api.edamam.com/api/food-database/v2/parser?app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d&ingr=${queriedFood}`;
    axios
      .get(url)
      .then((response) => {
        // parse the list of related foods to display on page
        parseReturnedFoodList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching food list data:", error);
      });
  };

  // // For parsing returned list of food gotten in response
  const parseReturnedFoodList = (foodResponse) => {
    console.log(foodResponse.hints);

    let parsedFoodList = foodResponse.hints.map((foodItem) => {
      let qualifiers = "";
      for (const qualified in foodItem.measures[0]) {
        if (qualified === "qualified") {
          qualifiers = new Array(
            foodItem.measures[0].qualified[0].qualifiers[0].uri
          );
        }
      }
      return {
        key: foodItem.food.foodId,
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
        unit: "g",
        calories: foodItem.food.nutrients.ENERC_KCAL,
        protein: parseFloat(foodItem.food.nutrients.PROCNT).toFixed(2),
        carbs: parseFloat(foodItem.food.nutrients.CHOCDF).toFixed(2),
        fats: parseFloat(foodItem.food.nutrients.FAT).toFixed(2),
      };
    });

    console.log("Final parsed food list:", parsedFoodList);
    // set the foodData state variable to the parsed food list
    setFoodData(parsedFoodList);
  };

  // function handleItemSelected(foodId) {
  //   console.log(`item with id: ${foodId} selected!`);
  //   // use id to find the ingredients value in
  //   //the foodData and use to populate the selectedFood variable
  //   const pickedItem = foodData.find((item) => {
  //     if (item.id == foodId) {
  //       console.log(`item details: id-${item.id} and name-${item.name}`);
  //       return item;
  //     }
  //   });
  //   // navigate to Item component or use it as the displayed component
  //   edamamApiCallFoodData(pickedItem);
  // }

  // // To get data on specific user-selected food
  // function edamamApiCallFoodData(item) {
  //   let url =
  //     "https://api.edamam.com/api/food-database/v2/nutrients?app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d";
  //   let ingredientsObj = item.ingredients[0];

  //   // ensure quaifiers is passed into the api call as an array
  //   if (ingredientsObj.qualifiers == null || ingredientsObj.qualifiers == "")
  //     ingredientsObj.qualifiers = [];
  //   console.log(ingredientsObj.qualifiers);
  //   axios
  //     .post(url, {
  //       ingredients: [
  //         {
  //           quantity: ingredientsObj.quantity,
  //           measureURI: ingredientsObj.measureURI,
  //           qualifiers: ingredientsObj.qualifiers,
  //           foodId: ingredientsObj.foodId,
  //         },
  //       ],
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // function parseNutritionalResponse(foodItem, nutriResp) {
  //   console.log(nutriResp);
  //   setSelectedFood({
  //     id: foodItem.id,
  //     name: foodItem.name,
  //     alias: foodItem.alias,
  //     image: foodItem.image,
  //     calories: nutriResp.calories,
  //     unit: "g",
  //     protein: nutriResp.totalNutrients.PROCNT.quantity,
  //     carbs: nutriResp.totalNutrients.CHOCDF.quantity,
  //     fats: nutriResp.totalNutrients.FAT.quantity,
  //   });

  //   console.log(selectedFood);
  // }

  return (
    <div className="my-20">
      <PickListModal
        isOpen={isPickListModalOpen}
        closeModal={closePickListModal}
        createList={openNewListModal}
        foodItem={selectedFood}
      />
      <NewListModal
        isOpen={isNewListModalOpen}
        closeModal={closeNewListModal}
        foods={[selectedFood]}
        openMode="food"
      />
      <h1
        htmlFor="default-search"
        className="text-5xl font-extrabold text-center dark:text-lightblue mb-20"
      >
        WHAT&apos;S THE NEXT MEAL?
      </h1>
      <form onSubmit={searchForFood} className="mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search food item"
            required
            onChange={(e) => setQueriedFood(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-lightblue font-medium rounded-lg text-sm px-4 py-2 dark:bg-darkbg dark:border-lightblue dark:text-gray dark:hover:text-darkblue dark:hover:bg-lightblue dark:focus:ring-lightblue"
          >
            Find
          </button>
        </div>
      </form>
      <ul className="h-96 overflow-auto max-w-lg divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
        {foodData &&
          foodData.map((foodItem, index) => {
            return (
              <li
                className="text-white p-3 sm:p-4 hover:bg-darkgray"
                key={`${foodItem.id}-${index}`}
              >
                <Link
                  to={"/item/" + foodItem.id}
                  state={{ openMode: "search", foodItem: foodItem }}
                  className="flex items-center space-x-4 rtl:space-x-reverse"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={foodItem.image}
                      alt={`${foodItem.alias} image`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {foodItem.name}
                    </p>
                    <ul className="text-sm dark:text-gray flex flex-wrap">
                      <li className="mr-2">
                        Protein: {foodItem.protein}
                        {foodItem.unit}
                      </li>
                      <li className="mr-2">
                        Carbs: {foodItem.carbs}
                        {foodItem.unit}
                      </li>
                      <li className="mr-2">
                        Fats: {foodItem.fats}
                        {foodItem.unit}
                      </li>
                    </ul>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedFood(foodItem);
                        openPickListModal();
                      }}
                      className="focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-darkbg text-gray hover:text-darkblue hover:bg-lightblue"
                    >
                      ADD ITEM
                    </button>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchFood;
