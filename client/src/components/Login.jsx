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
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Enter your kitchen
    //       </h2>
    //     </div>
    //     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <label htmlFor="email-address" className="sr-only">
    //             Email address
    //           </label>
    //           <input
    //             id="email-address"
    //             name="email"
    //             type="email"
    //             autoComplete="email"
    //             required
    //             className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
    //               emailError ? "border-red-500" : "border-gray-300"
    //             } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
    //             placeholder="Email address"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //           {emailError && (
    //             <p className="text-red-500 text-xs mt-1">{emailError}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label htmlFor="password" className="sr-only">
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             autoComplete="current-password"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //       </div>

    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center">
    //           <input
    //             id="remember-me"
    //             name="remember-me"
    //             type="checkbox"
    //             className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    //           />
    //           <label
    //             htmlFor="remember-me"
    //             className="ml-2 block text-sm text-gray-900"
    //           >
    //             Remember me
    //           </label>
    //         </div>

    //         <div className="text-sm">
    //           <a
    //             href="#"
    //             className="font-medium text-indigo-600 hover:text-indigo-500"
    //           >
    //             Forgot your password?
    //           </a>
    //         </div>
    //       </div>

    //       <div>
    //         <button
    //           type="submit"
    //           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //         >
    //           Sign in
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="">
      <h1>Enter your kitchen</h1>
      <form action="">
        <label for="email">Your email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="name@email.com"
          required
        />
      </form>
    </div>
  );
};

export default Login;
