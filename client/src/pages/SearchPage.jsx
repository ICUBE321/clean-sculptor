import { Link } from "react-router-dom";
import SearchFood from "../components/SearchFood";

const SearchPage = ({ foodData, setFoodData }) => {
  return (
    <div className="max-w-full mx-auto flex justify-center items-center">
      <SearchFood foodData={foodData} setFoodData={setFoodData} />
    </div>
  );
};

export default SearchPage;
