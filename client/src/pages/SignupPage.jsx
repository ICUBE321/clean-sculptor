import SignUp from "../components/SignUp";
import { Link } from "react-router-dom";

const SignupPage = ({ setToken }) => {
  return (
    <div className="">
      <SignUp setToken={setToken} />
    </div>
  );
};

export default SignupPage;
