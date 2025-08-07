import { useEffect, useRef, useState } from "react";
import axios from "axios";

const PickListModal = ({ isOpen, closeModal, createList, foodItem }) => {
  const [foodLists, setFoodLists] = useState(null);
  const hasInitialized = useRef(false); // A ref to check if initialization has occurred
  let userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    if (!hasInitialized.current) {
      fetchFoodLists();
      hasInitialized.current = true; // Mark as initialized
    }
  }, []);

  // fetch user's food lists from the servser
  const fetchFoodLists = async () => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/food_lists/all`, {
        params: {
          userId: userId,
        },
      })
      .then(function (response) {
        let tmpList = [];
        if (response.data) {
          tmpList = response.data.map((foodList) => {
            return {
              id: foodList._id,
              name: foodList.listName,
            };
          });
        }
        setFoodLists(tmpList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkAndCloseModal = (event) => {
    if (event.target.id == "outer-modal") closeModal();
  };

  // save food item to the selected list
  const saveToList = async (listId) => {
    console.log("foodItem to save: ", foodItem);
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/food`, {
        userId: userId,
        listId: listId,
        food: {
          name: foodItem.name,
          alias: foodItem.alias,
          image: foodItem.image,
          unit: foodItem.unit || "g",
          carbs: foodItem.carbs,
          protein: foodItem.protein,
          fats: foodItem.fats,
          quantity: foodItem.quantity || 1,
        },
      })
      .then(function (response) {
        console.log("Food item saved to list successfully:", response.data);
        closeModal();
      })
      .catch(function (error) {
        console.error("Error saving food item to list:", error);
      });
  };

  if (!isOpen) return null;
  return (
    <div
      className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 bg-darkbg/75 w-full h-full"
      id="outer-modal"
      onClick={(event) => {
        checkAndCloseModal(event);
      }}
    >
      <div className="bg-darkbg rounded-lg p-10 h-fit w-5/12 border-2 border-darkgray">
        <ul className="h-96 overflow-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
          {foodLists.map((list) => {
            return (
              <li
                className="text-white p-3 sm:p-4 hover:bg-darkgray"
                key={list.id}
              >
                <div
                  onClick={() => saveToList(list.id)}
                  className="flex items-center space-x-4 rtl:space-x-reverse"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate text-white">
                      {list.name}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          type="submit"
          className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
          onClick={() => {
            closeModal();
            createList();
          }}
        >
          CREATE LIST
        </button>
        <button
          className="focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-darkbg text-red-400 hover:text-white hover:bg-red-400"
          onClick={closeModal}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default PickListModal;
