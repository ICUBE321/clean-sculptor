import React, { useState } from "react";
import { Route, Routes, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import ListsPage from "./pages/ListsPage";
import ProfilePage from "./pages/ProfilePage";
import ItemPage from "./pages/ItemPage";
import ListPage from "./pages/ListPage";

function App() {
  //converting to use session storage over memory
  const setToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  };
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const token = getToken();

  return (
    <div className="bg-darkbg h-screen font-sans">
      <Navbar />
      {!token ? (
        <LoginPage setToken={setToken} />
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/lists" element={<ListsPage />} />
          <Route path="/list/:id" element={<ListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
