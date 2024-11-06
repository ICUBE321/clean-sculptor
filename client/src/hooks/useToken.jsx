import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useToken = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
    if (location.pathname == "/login" || location.pathname == "/signup") {
      navigate("search");
    } else {
      navigate(location.pathname);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    navigate("login");
  };

  return { setToken: saveToken, token: getToken(), removeToken: removeToken };
};

export default useToken;
