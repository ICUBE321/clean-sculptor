import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import ListsPage from "./pages/ListsPage";
import ProfilePage from "./pages/ProfilePage";
import ItemPage from "./pages/ItemPage";
import ListPage from "./pages/ListPage";
import useToken from "./hooks/useToken";

function App() {
  const { token, setToken } = useToken();
  let location = useLocation();
  console.log(`pathname: ${location.pathname}`);
  return (
    <div className="bg-darkbg h-screen font-sans">
      <Navbar />
      {!token ? (
        location.pathname == "/signup" ? (
          <SignupPage />
        ) : (
          <LoginPage setToken={setToken} />
        )
      ) : (
        <Routes>
          <Route path="login" element={<LoginPage setToken={setToken} />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="item/:id" element={<ItemPage />} />
          <Route path="lists" element={<ListsPage />} />
          <Route path="list/:id" element={<ListPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
