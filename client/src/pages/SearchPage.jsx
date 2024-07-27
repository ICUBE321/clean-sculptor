import { Link } from "react-router-dom";
import SearchFood from "../components/SearchFood";

const SearchPage = () => {
  return (
    <div className="max-w-full mx-auto flex justify-center items-center">
      <SearchFood />
    </div>
  );
};

export default SearchPage;
