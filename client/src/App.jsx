import React from "react";
import { Route, Routes, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import ListsPage from "./pages/ListsPage";
import ProfilePage from "./pages/ProfilePage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="bg-darkbg h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/lists" element={<ListsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
