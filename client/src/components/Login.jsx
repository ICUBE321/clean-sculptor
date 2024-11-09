import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  // State variables to store user input and validation status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the email is valid before submitting the form
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    //Reset email error if validation succeeds
    setEmailError("");
    //You can also send the data to your backend server for authentication
    const token = await loginUser({
      email,
      password,
    });
  };

  async function loginUser(credentials) {
    axios
      .post("http://localhost:3000/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (response) {
        setToken(response.data.token, response.data.user._id);
      })
      .catch(function (error) {});
  }

  // Function to validate email using regular expression
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="my-20">
      <h1 className="text-5xl font-extrabold text-center text-lightblue mb-20">
        ENTER YOUR KITCHEN
      </h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray"
          >
            Your email
          </label>
          <input
            type="email"
            name=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-darkgray border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            id="email"
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray"
          >
            Your password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-sm rounded-lg block w-full p-2.5 bg-darkgray border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Login;
