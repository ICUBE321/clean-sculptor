import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PickListModal from "./PickListModal";
import NewListModal from "./NewListModal";

const SearchItem = () => {
  // grabbing the passed location state variables
  const location = useLocation();
  const { foodItem } = location.state || {};

  // for pick list modal
  const [isPickListModalOpen, setIsPickListModalOpen] = useState(false);

  const openPickListModal = () => setIsPickListModalOpen(true);
  const closePickListModal = () => setIsPickListModalOpen(false);

  const [isNewListModalOpen, setIsNewListModalOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("g");
  const [nutrients, setNutrients] = useState({
    proteins: foodItem?.protein,
    carbs: foodItem?.carbs,
    fats: foodItem?.fats,
  });

  const closeNewListModal = () => {
    setIsNewListModalOpen(false);
  };

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

  const handleCreateList = () => {
    setIsNewListModalOpen(true);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
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
      </div>
      <div className="flex flex-row items-center w-full">
        <PickListModal
          isOpen={isPickListModalOpen}
          closeModal={closePickListModal}
          createList={handleCreateList}
          foodItem={{
            name: foodItem?.name,
            alias: foodItem?.alias,
            image: foodItem?.image,
            unit: foodItem?.unit || "g",
            carbs: nutrients.carbs,
            protein: nutrients.proteins,
            fats: nutrients.fats,
          }}
        />
        <NewListModal
          isOpen={isNewListModalOpen}
          closeModal={closeNewListModal}
          foods={[
            {
              name: foodItem?.name,
              alias: foodItem?.alias,
              image: foodItem?.image,
              unit: foodItem?.unit || "g",
              carbs: nutrients.carbs,
              protein: nutrients.proteins,
              fats: nutrients.fats,
            },
          ]}
          openMode="food"
        />
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
            </div>
            <div className="text-darkblue">
              <label htmlFor="number-input" className="text-sm mr-3">
                Choose quantity:
              </label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
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
          }}
          className="self-end text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-lightblue dark:text-gray dark:hover:text-darkblue dark:hover:bg-lightblue dark:focus:ring-blue-800"
        >
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default SearchItem;
