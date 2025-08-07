import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ListItem = () => {
  // grabbing the passed location state variables
  const location = useLocation();
  const { foodItem, listId } = location.state || {};
  let userId = JSON.parse(localStorage.getItem("userId"));
  const [isModifying, setIsModifying] = useState(false);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(foodItem?.quantity || 1);
  const [unit, setUnit] = useState("g");
  const [nutrients, setNutrients] = useState({
    proteins: foodItem?.protein,
    carbs: foodItem?.carbs,
    fats: foodItem?.fats,
  });

  const calculateNutirents = (newQuantity, newUnit) => {
    if (!foodItem) return;
    const baseValues = {
      proteins: foodItem?.protein,
      carbs: foodItem?.carbs,
      fats: foodItem?.fats,
    };

    let multiplier = newQuantity;
    if (newUnit === "kg") {
      multiplier /= 1000;
    }

    setNutrients({
      proteins: (baseValues.proteins * multiplier).toFixed(2),
      carbs: (baseValues.carbs * multiplier).toFixed(2),
      fats: (baseValues.fats * multiplier).toFixed(2),
    });
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseFloat(e.target.value) || 0;
    setQuantity(newQuantity);
    calculateNutirents(newQuantity, unit);
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
    calculateNutirents(quantity, newUnit);
  };

  // function to handle deletion of the food item from list
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_API_BASE_URL}/food`, {
        params: {
          userId: userId,
          listId: listId,
          foodName: foodItem.name,
        },
      })
      .then((response) => {
        console.log("Food item deleted successfully");
        // navigate back to list page
        navigate(`/list/${listId}`, {
          state: { listId: listId, listName: "" },
        });
      })
      .catch((error) => {
        console.error("Error deleting food item:", error);
      });
  };

  // function to update the food item
  const handleUpdate = () => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/food/update`, {
        userId: userId,
        listId: listId,
        food: {
          name: foodItem.name,
          alias: foodItem.alias,
          image: foodItem.image,
          unit: unit,
          carbs: nutrients.carbs,
          protein: nutrients.proteins,
          fats: nutrients.fats,
          quantity: quantity,
        },
      })
      .then((response) => {
        console.log("Food item updated successfully");
        setIsModifying(false);
      })
      .catch((error) => {
        console.error("Error updating food item:", error);
      });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Link
          to={`/list/${listId}`}
          state={{ listId: listId, listName: "" }}
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
          type=""
          onClick={() => {
            if (isModifying) {
              handleUpdate();
            } else {
              setIsModifying(true);
            }
          }}
          className="self-end border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue focus:ring-blue-800"
        >
          {isModifying ? "SAVE" : "MODIFY"}
        </button>
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="grow flex flex-row p-10">
          <div className="p-10 w-1/3">
            <img
              className="w-full rounded-full"
              src={foodItem?.image}
              alt={foodItem?.alias}
            />
          </div>
          <div className="p-4 leading-normal w-full">
            <h2 className="text-7xl font-bold dark:text-darkgray mb-5">
              {foodItem?.name}
            </h2>
            <div className="flex">
              <p className="text-2xl dark:text-darkblue mr-5">
                Protein: {nutrients.proteins}
                {unit}
              </p>
              <p className="text-2xl dark:text-darkblue mr-5">
                Carbs: {nutrients.carbs}
                {unit}
              </p>
              <p className="text-2xl dark:text-darkblue mr-5">
                Fats: {nutrients.fats}
                {unit}
              </p>
            </div>
            <div className="mb-5">
              {isModifying ? (
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-1/5 text-sm text-darkblue bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  value={unit}
                  onChange={handleUnitChange}
                >
                  <option defaultChecked value="g">
                    grams
                  </option>
                  <option value="kg">kilograms</option>
                </select>
              ) : (
                <p className="block py-2.5 px-0 w-1/5 text-sm text-darkblue bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  {unit == "g" ? "grams" : "kilograms"}
                </p>
              )}
            </div>
            <div className="text-darkblue">
              <label htmlFor="number-input" className="text-sm mr-3">
                {isModifying ? "Choose quantity:" : "Quantity:"}
              </label>
              {isModifying ? (
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  name=""
                  id="number-input"
                  className="text-sm p-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
                />
              ) : (
                <p className="text-sm p-2 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0">
                  {quantity}
                </p>
              )}
            </div>
          </div>
        </div>
        {!isModifying && (
          <button
            className="self-end text-center me-2 mb-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 bg-darkbg text-red-400 hover:text-white hover:bg-red-400"
            onClick={handleDelete}
          >
            DELETE
          </button>
        )}
      </div>
    </div>
  );
};

export default ListItem;
