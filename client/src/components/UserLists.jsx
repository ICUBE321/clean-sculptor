import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import BrowserRouter and Link
import NewListModal from "./NewListModal";
import axios from "axios";

const UserLists = () => {
  const [foodLists, setFoodLists] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  let userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    if (!isModalOpen) {
      retrieveAllLists();
    }
  }, [isModalOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // call function to retrieve all user food lists when the page is opened
  const retrieveAllLists = () => {
    setIsLoading(true);
    setError("");
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/food_lists/all`, {
        params: { userId: userId },
      })
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
        console.error("Error retrieving food lists:", error);
        setError("Failed to load your lists. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // function to delete a food list
  const deleteList = (listId) => {
    axios
      .delete(`${import.meta.env.VITE_API_BASE_URL}/food_list`, {
        params: {
          userId: userId,
          listId: listId,
        },
      })
      .then((response) => {
        console.log("List deleted successfully:", response.data);
        // refresh the list
        retrieveAllLists();
      })
      .catch((error) => {
        console.error("Error deleting list:", error);
      });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`my-10 md:my-20 w-full md:w-4/5 lg:w-3/5 px-4 mx-auto`}>
      <div className="flex flex-col md:flex-row items-center mb-10 md:mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center md:text-left dark:text-lightblue mb-6 md:mb-0 md:grow">
          YOUR LISTS
        </h1>
        <button
          className="w-full md:w-auto focus:ring-4 focus:outline-none focus:ring-lightblue font-medium rounded-lg text-sm px-4 py-2 bg-darkbg border border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
          onClick={openModal}
        >
          NEW LIST
        </button>
      </div>
      <NewListModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        openMode="list"
      />

      {error && (
        <div className="mb-4 p-4 text-red-500 bg-red-100 dark:bg-red-900/20 rounded-lg text-center">
          {error}
          <button
            onClick={retrieveAllLists}
            className="ml-2 underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lightblue"></div>
        </div>
      ) : (
        <ul className="h-96 overflow-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
          {foodLists?.map((list) => {
            return (
              <li
                className="text-white p-3 sm:p-4 hover:bg-darkgray flex items-center justify-between"
                key={list.id}
              >
                <Link
                  to={"/list/" + list.id}
                  state={{ listId: list.id, listName: list.name }}
                  className="flex-1"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate text-white">
                      {list.name}
                    </p>
                  </div>
                </Link>
                <div
                  className="inline-flex items-center text-base font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteList(list.id);
                  }}
                >
                  <button className="focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-darkbg text-red-400 hover:text-white hover:bg-red-400">
                    DELETE
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UserLists;
