import { useState } from "react";
import axios from "axios";
import { object, string, number } from "yup";

const NewListModal = ({ isOpen, closeModal, foods, openMode }) => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const checkAndCloseModal = (event) => {
    if (event.target.id == "outer-modal") closeModal();
  };

  const [listName, setListName] = useState("");
  const [calories, setCalories] = useState(0);
  const [listNameError, setListNameError] = useState("");
  const [caloriesError, setCaloriesError] = useState("");

  if (!isOpen) return null;

  // validation schema
  const listSchema = object({
    listName: string().trim().required("List name is required"),
    calories: number().min(0, "Calories must be a positive number"),
  });

  // function to create a new list
  const createList = (e) => {
    e.preventDefault();

    try {
      listSchema.validateSync(
        {
          listName,
          calories,
        },
        { abortEarly: false }
      );
    } catch (error) {
      // reset previous errors
      setListNameError("");
      setCaloriesError("");

      // handle each validation error
      error.inner.forEach((err) => {
        if (err.path === "listName") {
          setListNameError(err.message);
        }
        if (err.path === "calories") {
          setCaloriesError(err.message);
        }
      });
      return;
    }

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
            quantity: foods[0]?.quantity || 1,
          },
        ],
      })
      .then((response) => {
        setListName("");
        setCalories(0);
        // navigate to search page
        closeModal();
      })
      .catch((error) => {
        console.error("Error creating list:", error);
        if (error.response?.data?.message) {
          setListNameError(error.response.data.message);
        }
      });
  };

  // function to create an empty list
  const createEmptyList = (e) => {
    e.preventDefault();

    try {
      listSchema.validateSync(
        {
          listName,
          calories,
        },
        { abortEarly: false }
      );
    } catch (error) {
      // reset previous errors
      setListNameError("");
      setCaloriesError("");

      // handle each validation error
      error.inner.forEach((err) => {
        if (err.path === "listName") {
          setListNameError(err.message);
        }
        if (err.path === "calories") {
          setCaloriesError(err.message);
        }
      });
      return;
    }

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/foods/empty`, {
        userId: userId,
        listName: listName,
      })
      .then((response) => {
        // navigate to search page
        closeModal();
      })
      .catch((error) => {
        console.error("Error creating empty list:", error);
        if (error.response?.data?.message) {
          setListNameError(error.response.data.message);
        }
      });
  };

  // parse and set calories input
  const handleCaloriesChange = (e) => {
    const newCalories = parseFloat(e.target.value) || 0;
    setCalories(newCalories);
  };

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
              className={`bg-gray-50 border ${
                listNameError ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              id="name"
              placeholder="Bulk list"
              required
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
            {listNameError && (
              <p className="mt-2 text-sm text-red-500">{listNameError}</p>
            )}
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
              className={`bg-gray-50 border ${
                caloriesError ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              id="calories"
              value={calories}
              onChange={handleCaloriesChange}
            />
            {caloriesError && (
              <p className="mt-2 text-sm text-red-500">{caloriesError}</p>
            )}
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
