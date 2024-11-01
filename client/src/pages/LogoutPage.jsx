import React from "react";
import Logout from "../components/Logout";

const LogoutPage = ({ removeToken }) => {
  return (
    <div className="max-w-full mx-auto flex justify-center items-center">
      <Logout removeToken={removeToken} />
    </div>
  );
};

export default LogoutPage;
