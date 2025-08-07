import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import ListsPage from "./pages/ListsPage";
// import ProfilePage from "./pages/ProfilePage";
import SearchItemPage from "./pages/SearchItemPage";
import ListItemPage from "./pages/ListItemPage";
import ListPage from "./pages/ListPage";
import useToken from "./hooks/useToken";
import LogoutPage from "./pages/LogoutPage";

function App() {
  const { token, setToken, removeToken } = useToken();
  const [foodData, setFoodData] = useState();
  let location = useLocation();
  return (
    <div className="bg-darkbg h-screen font-sans">
      <Navbar tokenExists={token} />
      {!token ? (
        location.pathname == "/signup" ? (
          <SignupPage setToken={setToken} />
        ) : (
          <LoginPage setToken={setToken} />
        )
      ) : (
        <Routes>
          <Route path="login" element={<LoginPage setToken={setToken} />} />
          <Route path="signup" element={<SignupPage setToken={setToken} />} />
          <Route
            path="search"
            element={
              <SearchPage foodData={foodData} setFoodData={setFoodData} />
            }
          />
          <Route path="item/:id" element={<SearchItemPage />} />
          <Route path="list_item/:id" element={<ListItemPage />} />
          <Route path="lists" element={<ListsPage />} />
          <Route path="list/:id" element={<ListPage />} />
          {/* <Route path="profile" element={<ProfilePage />} /> */}
          <Route
            path="logout"
            element={<LogoutPage removeToken={removeToken} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
