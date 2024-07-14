import React from "react";
import { Link } from "react-router-dom"; // Import BrowserRouter and Link

const FoodList = ({ foodList, selectHandler, className }) => {
  return (
    <div className={`${className} w-full max-w-4xl flex-grow`}>
      {foodList ? (
        <div className="bg-white overflow-y-auto h-full">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Foods</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {foodList.map((foodItem) => (
                <div
                  key={foodItem.id}
                  onClick={() => selectHandler(foodItem.id)}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={foodItem.image}
                      alt={foodItem.alias}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {foodItem.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FoodList;
