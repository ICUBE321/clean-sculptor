import Login from "../components/Login";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";

const ListsPage = () => {
  return (
    <div className="max-w-full mx-auto flex justify-center items-center">
      <UserList />
    </div>
  );
};

export default ListsPage;
