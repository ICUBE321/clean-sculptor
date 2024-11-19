import React, { useState } from "react";
import axios from "axios";

const SignUp = ({ setToken }) => {
  //State variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can perform validation before submitting the form
    // Check if the email is valid before submitting the form
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    // Reset email error if validation succeeds
    setEmailError("");

    // For simplicity, let's just log the user input for now
    // You can also send the data to your backend server for processing
    const token = await createUser({
      name,
      email,
      password,
    });
  };

  async function createUser(credentials) {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/users`, {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (response) {
        setToken(response.data.token, response.data.user._id);
      })
      .catch(function (error) {});
  }

  //Function to validate email using regular expression
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="my-20">
      <h1 className="text-5xl font-extrabold text-center dark:text-lightblue mb-20">
        JOIN THE SCULPTORS
      </h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
            >
              Your name
            </label>
            <input
              type="text"
              name=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="name"
              placeholder="John"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Your email
          </label>
          <input
            type="email"
            name=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Your password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
