import React, { useState } from "react";

const Login = () => {
  // State variables to store user input and validation status
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");

  // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Check if the email is valid before submitting the form
  //   if (!validateEmail(email)) {
  //     setEmailError("Please enter a valid email address");
  //     return;
  //   }
  // Reset email error if validation succeeds
  // setEmailError("");

  // Here you can perform further validation and submit the form
  // console.log("Email:", email);
  // console.log("Password:", password);
  // You can also send the data to your backend server for authentication
  //};

  // Function to validate email using regular expression
  // const validateEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // };

  return (
    <div className="my-20">
      <h1 className="text-5xl font-extrabold text-center dark:text-lightblue mb-20">
        ENTER YOUR KITCHEN
      </h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Your email
          </label>
          <input
            type="email"
            name=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            placeholder="name@email.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Your password
          </label>
          <input
            type="password"
            name=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-lightblue dark:text-gray dark:hover:text-darkblue dark:hover:bg-lightblue dark:focus:ring-blue-800"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Login;
