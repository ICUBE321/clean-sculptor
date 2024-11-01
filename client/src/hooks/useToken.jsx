import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useToken = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    console.log(`token string: ${tokenString}`);
    const userToken = JSON.parse(tokenString);
    console.log("getToken function called");
    console.log(userToken);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
    console.log("token added");
    if (location.pathname == "/login" || location.pathname == "/signup") {
      navigate("search");
    } else {
      navigate(location.pathname);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    console.log("token removed");
    navigate("login");
  };

  return { setToken: saveToken, token: getToken(), removeToken: removeToken };
};

export default useToken;
