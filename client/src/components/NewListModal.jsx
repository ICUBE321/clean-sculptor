import React, { useState } from "react";
import axios from "axios";

const NewListModal = ({
  isOpen,
  closeModal,
  openPickList,
  shouldOpenPickList,
}) => {
  if (!isOpen) return null;

  const [listName, setListName] = useState("");
  const [listCalories, setListCalories] = useState("");
  let userId = JSON.parse(localStorage.getItem("userId"));

  const checkAndCloseModal = (event) => {
    if (event.target.id == "outer-modal") closeModal();
  };

  const createNewList = () => {
    axios
      .post("http://localhost:3000/foodlist", {
        userId: userId,
        listName: listName,
      })
      .then(function (response) {
        console.log(response);
        shouldOpenPickList && openPickList();
        closeModal();
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <form className="max-w-sm mx-10 bg-darkbg p-10">
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
              value={listCalories}
              onChange={(e) => setListCalories(e.target.value)}
            />
          </div>
          <button
            className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
            onClick={(event) => {
              shouldOpenPickList && event.preventDefault();
              createNewList();
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
        </form>
      </div>
    </div>
  );
};

export default NewListModal;
