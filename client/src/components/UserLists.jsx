import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import BrowserRouter and Link
import NewListModal from "./NewListModal";
import axios from "axios";

const UserLists = ({}) => {
  const [foodLists, setFoodLists] = useState(null);
  const hasInitialized = useRef(false); // A ref to check if initialization has occurred
  let userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    if (!hasInitialized.current) {
      retrieveAllFoodLists();
      hasInitialized.current = true; // Mark as initialized
    }
  }, []);

  // call function to retrieve all user food lists when the page is opened
  const retrieveAllFoodLists = () => {
    axios
      .get(`/api/foods/all?userId=${userId}`)
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`my-20 w-3/5 ${isModalOpen && "bg-darkbg"}`}>
      <div className="flex items-center mb-20">
        <h1 className="grow text-5xl font-extrabold text-center dark:text-lightblue">
          YOUR LISTS
        </h1>
        <button
          className="focus:ring-4 focus:outline-none focus:ring-lightblue font-medium rounded-lg text-sm px-4 py-2 bg-darkbg border border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
          onClick={openModal}
        >
          NEW LIST
        </button>
      </div>
      <NewListModal isOpen={isModalOpen} closeModal={closeModal} />
      <ul className="h-96 overflow-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
        {foodLists?.map((list) => {
          return (
            <li
              className="text-white p-3 sm:p-4 hover:bg-darkgray"
              key={list.id}
            >
              <Link
                to={"/list/" + list.id}
                className="flex items-center space-x-4 rtl:space-x-reverse"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-white">
                    {list.name}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  <button className="focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-darkbg text-red-400 hover:text-white hover:bg-red-400">
                    DELETE
                  </button>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserLists;
