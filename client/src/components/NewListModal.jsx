import React from "react";

const NewListModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 bg-darkbg/75 w-full">
      <div className="justify-center items-center bg-darkbg rounded-lg p-10 w-max mx-auto max-h-full">
        <form className="max-w-sm mx-10 bg-darkbg p-10">
          <div className="mb-5">
            <label
              for="name"
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
            />
          </div>
          <div className="mb-5">
            <label
              for="calories"
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
            />
          </div>
          <button
            type="submit"
            className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
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
