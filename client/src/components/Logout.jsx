import { useNavigate } from "react-router-dom";

const Logout = ({ removeToken }) => {
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
  };

  return (
    <div className="my-20">
      <div className="text-center">
        <svg
          className="mx-auto mb-10 w-20 h-20 text-lightblue"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1 className="text-5xl font-extrabold text-center text-lightblue mb-20">
          DO YOU WANT TO LEAVE THE KITCHEN?
        </h1>
        <button
          type="button"
          className="focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 bg-darkbg text-red-400 hover:text-white hover:bg-red-400 mr-5"
          onClick={logout}
        >
          Yes, I&apos;m sure
        </button>
        <button
          type="button"
          className="focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 bg-darkbg border-lightblue text-gray hover:text-darkblue hover:bg-lightblue focus:ring-lightblue"
          onClick={() => navigate(-1)}
        >
          No, cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
