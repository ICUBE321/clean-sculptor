import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const List = () => {
  // grabbing the passed location state variables
  const location = useLocation();
  const { listId, listName } = location.state || {};
  const hasInitialized = useRef(false); // A ref to check if initialization has occurred
  let userId = JSON.parse(localStorage.getItem("userId"));
  const [currentList, setCurrentList] = useState({
    id: listId || "",
    name: listName || "",
    foods: [],
  });
  const [isModifying, setIsModifying] = useState(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      getAllFoodItems();
      hasInitialized.current = true; // Mark as initialized
    }
  }, []);

  // get food items in user list
  const getAllFoodItems = async () => {
    console.log(`List id: ${listId}, list name: ${listName}`);
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/food_list/`, {
        params: {
          userId: userId,
          listId: listId,
        },
      })
      .then((response) => {
        console.log("Food items in list:", response.data);
        let listData = response.data;
        let parsedList = {
          id: listData._id,
          name: listData.listName,
          foods: listData.foods.map((food) => {
            return {
              id: food._id,
              name: food.name,
              alias: food.alias,
              image: food.image,
              unit: food.unit,
              carbs: food.carbs,
              protein: food.protein,
              fats: food.fats,
              quantity: food.quantity,
            };
          }),
        };
        setCurrentList(parsedList);
      })
      .catch((error) => {
        console.error("Error fetching food items:", error);
      });
  };

  // function to handle list name change
  const handleListNameChange = (e) => {
    const newName = e.target.value;
    setCurrentList((prevList) => ({
      ...prevList,
      name: newName,
    }));
  };

  // function to handle food deletion
  const handleDeteteFood = async (foodId) => {
    let updatedFoods = currentList.foods.filter((food) => food.id !== foodId);
    setCurrentList((prevList) => {
      return {
        ...prevList,
        foods: updatedFoods,
      };
    });
  };

  // function to update the food list
  const handleListUpdate = async () => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/food_list/update`, {
        userId: userId,
        listId: currentList.id,
        listName: currentList.name,
        foods: currentList.foods,
      })
      .then((response) => {
        console.log("List updated successfully:", response.data);
        setIsModifying(false);
        getAllFoodItems(); // Refresh the list after updating
      })
      .catch((error) => {
        console.error("Error updating list:", error);
      });
  };

  return (
    <div className="my-20 w-3/5">
      <div className="flex justify-between">
        <Link
          to="/lists"
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
        <button
          type="button"
          onClick={() => {
            if (isModifying) {
              handleListUpdate();
            } else {
              setIsModifying(true);
            }
          }}
          className="self-end border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue focus:ring-blue-800"
        >
          {isModifying ? "SAVE" : "MODIFY"}
        </button>
      </div>
      <div className="flex flex-col items-center mb-20">
        {isModifying ? (
          <input
            type="text"
            name=""
            id=""
            placeholder={currentList.name.toUpperCase()}
            className="grow text-5xl font-extrabold text-center text-lightblue bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            onChange={handleListNameChange}
          />
        ) : (
          <h1 className="grow text-5xl font-extrabold text-center text-darkblue">
            {currentList.name.toUpperCase()}
          </h1>
        )}
        <form action="" className="w-full">
          <div className="flex mt-10 items-center justify-center">
            <label htmlFor="list_calories" className="text-gray mr-3">
              List Calories:
            </label>
            <input
              type="number"
              name=""
              id="list_calories"
              disabled={!isModifying}
              value={currentList.calories}
              className={`${
                isModifying ? "text-lightblue" : "text-darkblue"
              } text-sm p-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0`}
            />
          </div>
        </form>
      </div>
      <ul className="h-96 overflow-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
        {currentList.foods.map((food, index) => {
          return (
            <li
              className={`text-white p-4 ${
                !isModifying && "hover:bg-darkgray"
              }`}
              key={`${food.id}-${index}`}
            >
              {isModifying ? (
                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={food.image}
                      alt={`${food.alias} image`}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {food.name}
                  </p>
                  <ul className="text-sm dark:text-gray flex-1 flex flex-wrap justify-end">
                    <li className="mr-2">
                      Protein: {food.protein}
                      {food.unit}
                    </li>
                    <li className="mr-2">
                      Carbs: {food.carbs}
                      {food.unit}
                    </li>
                    <li className="mr-2">
                      Fats: {food.fats}
                      {food.unit}
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={() => {
                      handleDeteteFood(food.id);
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-red-400 hover:text-red-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  to={"/list_item/" + food.id}
                  state={{
                    openMode: "item",
                    foodItem: food,
                    listId: currentList.id,
                  }}
                  className="flex items-center justify-center space-x-4 rtl:space-x-reverse"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={food.image}
                      alt={`${food.alias} image`}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {food.name}
                  </p>
                  <ul className="text-sm dark:text-gray flex-1 flex flex-wrap justify-end">
                    <li className="mr-2">
                      Protein: {food.protein}
                      {food.unit}
                    </li>
                    <li className="mr-2">
                      Carbs: {food.carbs}
                      {food.unit}
                    </li>
                    <li className="mr-2">
                      Fats: {food.fats}
                      {food.unit}
                    </li>
                  </ul>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
