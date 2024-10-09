import Login from "../components/Login";
import { Link } from "react-router-dom";

const LoginPage = ({ setToken }) => {
  return (
    <div className="max-w-full mx-auto flex justify-center items-center">
      <Login setToken={setToken} />
    </div>
  );
};

export default LoginPage;
