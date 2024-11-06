import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useToken = () => {
  const navigate = useNavigate();
  let location = useLocation();

  // retrieve token from local storage for validation
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  // save the token and user id to the local storage
  const saveToken = (userToken, userId) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    localStorage.setItem("userId", JSON.stringify(userId));
    setToken(userToken.token);
    if (location.pathname == "/login" || location.pathname == "/signup") {
      navigate("search");
    } else {
      navigate(location.pathname);
    }
  };

  // delete token and user id from local storage
  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("login");
  };

  return { setToken: saveToken, token: getToken(), removeToken: removeToken };
};

export default useToken;
