import React from "react";

const SearchForm = ({ queriedFood, submitHandler, searchFoodHandler }) => {
  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Find a food item
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={submitHandler}>
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
              value={queriedFood}
              onChange={(e) => searchFoodHandler(e.target.value)}
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
      </form>
    </div>
  );
};

export default SearchForm;
