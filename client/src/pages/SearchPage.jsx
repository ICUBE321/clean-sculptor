import { Link } from "react-router-dom";
import SearchFood from "../components/SearchFood";

const SearchPage = () => {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <SearchFood />
      </div>
    </div>
  );
};

export default SearchPage;
