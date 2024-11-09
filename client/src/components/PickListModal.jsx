import React from "react";

const PickListModal = ({ isOpen, closeModal, createList }) => {
  if (!isOpen) return null;
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

  const checkAndCloseModal = (event) => {
    if (event.target.id == "outer-modal") closeModal();
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
        <ul className="h-96 overflow-auto w-full divide-y divide-gray-700">
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
                </div>
              </li>
            );
          })}
        </ul>
        <button
          type="submit"
          className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
          onClick={() => {
            createList();
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
      </div>
    </div>
  );
};

export default PickListModal;
