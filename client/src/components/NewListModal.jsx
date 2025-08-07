import { useState } from "react";
import axios from "axios";

const NewListModal = ({ isOpen, closeModal, foods, openMode }) => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  console.log("Foods: ", foods);
  const checkAndCloseModal = (event) => {
    if (event.target.id == "outer-modal") closeModal();
  };

  const [listName, setListName] = useState("");
  const [calories, setCalories] = useState(0);

  // function to create a new list
  const createList = (e) => {
    e.preventDefault();
    console.log("Creating list for user:", userId, "with name:", listName);
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/foods`, {
        userId: userId,
        listName: listName,
        foods: [
          {
            name: foods[0]?.name,
            alias: foods[0]?.alias,
            image: foods[0]?.image,
            unit: foods[0]?.unit || "g",
            carbs: foods[0]?.carbs,
            protein: foods[0]?.protein,
            fats: foods[0]?.fats,
          },
        ],
      })
      .then((response) => {
        console.log("List created successfully:", response.data);
        setListName("");
        setCalories(0);
        // navigate to search page
        closeModal();
      })
      .catch((error) => {
        console.error("Error creating list:", error);
      });
  };

  // function to create an empty list
  const createEmptyList = (e) => {
    e.preventDefault();
    console.log(
      "Creating empty list for user:",
      userId,
      "with name:",
      listName
    );

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/foods/empty`, {
        userId: userId,
        listName: listName,
      })
      .then((response) => {
        console.log("Empty list created successfully:", response.data);
        // navigate to search page
        closeModal();
      })
      .catch((error) => {
        console.error("Error creating empty list:", error);
      });
  };

  // parse and set calories input
  const handleCaloriesChange = (e) => {
    const newCalories = parseFloat(e.target.value) || 0;
    setCalories(newCalories);
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
        <form
          className="max-w-sm mx-10 bg-darkbg p-10"
          onSubmit={(e) => {
            if (openMode === "food") {
              createList(e);
            } else {
              createEmptyList(e);
            }
          }}
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
            >
              List Name
            </label>
            <input
              type="text"
              name=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="name"
              placeholder="Bulk list"
              required
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="calories"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
            >
              Amount of Calories
            </label>
            <input
              type="number"
              min={0}
              name=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="calories"
              value={calories}
              onChange={handleCaloriesChange}
            />
          </div>
          <button
            type="submit"
            className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
          >
            CREATE LIST
          </button>
          <button
            type="button"
            className="focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-darkbg text-red-400 hover:text-white hover:bg-red-400"
            onClick={closeModal}
          >
            CANCEL
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewListModal;
