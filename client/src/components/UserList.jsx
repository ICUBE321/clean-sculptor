import React from "react";
import { Link } from "react-router-dom"; // Import BrowserRouter and Link

const UserList = ({}) => {
  let foodLists = [
    {
      id: 1,
      name: "Bulk List",
    },
    {
      id: 2,
      name: "Cut List",
    },
    { id: 3, name: "Keto List" },
    { id: 4, name: "Fried rice Ingredients" },
  ];

  return (
    <div className="my-20 w-3/5">
      <div className="flex items-center mb-20">
        <h1 className="grow text-5xl font-extrabold text-center dark:text-lightblue">
          YOUR LISTS
        </h1>
        <button className="focus:ring-4 focus:outline-none focus:ring-lightblue font-medium rounded-lg text-sm px-4 py-2 bg-darkbg border border-lightblue text-gray hover:text-darkblue hover:bg-lightblue">
          NEW LIST
        </button>
      </div>
      <ul className="h-96 overflow-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
        {foodLists.map((list) => {
          return (
            <li
              className="text-white p-3 sm:p-4 hover:bg-darkgray"
              key={list.id}
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-white">
                    {list.name}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  <button className="focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-darkbg text-gray hover:text-darkblue hover:bg-lightblue">
                    MODIFY
                  </button>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  <button className="focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-darkbg text-red-400 hover:text-white hover:bg-red-400">
                    DELETE
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
