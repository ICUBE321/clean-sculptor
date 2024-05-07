import React from "react";
import { Route, Routes, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

// const router = (
//   <Routes>
//     <Route path="/" element={<LoginPage />} />
//     <Route path="/signup" element={<SignupPage />} />
//   </Routes>
// );

// createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />,
//   },
// ]);

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
