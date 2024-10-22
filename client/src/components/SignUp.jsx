import React, { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  // State variables to store user input
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can perform validation before submitting the form
  //   // Check if the email is valid before submitting the form
  //   if (!validateEmail(email)) {
  //     setEmailError("Please enter a valid email address");
  //     return;
  //   }
  //   // Reset email error if validation succeeds
  //   setEmailError("");

  //   // For simplicity, let's just log the user input for now
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   // You can also send the data to your backend server for processing
  // };

  // Function to validate email using regular expression
  // const validateEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // };

  return (
    <div className="my-20">
      <h1 className="text-5xl font-extrabold text-center text-lightblue mb-20">
        JOIN THE SCULPTORS
      </h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5 flex justify-between">
          <div className="">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 text-gray"
            >
              First Name
            </label>
            <input
              type="text"
              name=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="first_name"
              placeholder="John"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 text-gray"
            >
              Last Name
            </label>
            <input
              type="text"
              name=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="last_name"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 text-gray"
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
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 text-gray"
          >
            Your password
          </label>
          <input
            type={showPassword ? 'text' : 'password'} 
            name=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="password"
            placeholder="Enter new password"  
            required
          />


            {/* Checkbox */}
            <div className="flex mt-4">
              <input 
                id="password" 
                type="checkbox" 
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" 
                onChange={() => setShowPassword(!showPassword)} 
              />
              <label 
                htmlFor="password" 
                className="block ms-3 text-sm font-medium text-gray-900 text-gray"
              >
                Show password
              </label>
            </div>
        </div>
        <button
          type="submit"
          className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
