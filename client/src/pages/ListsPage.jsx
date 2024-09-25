import Login from "../components/Login";
import { Link } from "react-router-dom";
import UserLists from "../components/UserLists";

const ListsPage = () => {
  return (
    <div className="max-w-full mx-auto flex justify-center items-center">
      <UserLists />
    </div>
  );
};

export default ListsPage;
