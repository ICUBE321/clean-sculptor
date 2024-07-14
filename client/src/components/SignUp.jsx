import React, { useState } from "react";

const SignUpForm = () => {
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
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Join the sculptors
    //       </h2>
    //     </div>
    //     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <label htmlFor="name" className="sr-only">
    //             Name
    //           </label>
    //           <input
    //             id="name"
    //             name="name"
    //             type="text"
    //             autoComplete="name"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="email" className="sr-only">
    //             Email address
    //           </label>
    //           <input
    //             id="email"
    //             name="email"
    //             type="email"
    //             autoComplete="email"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Email address"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="password" className="sr-only">
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             autoComplete="new-password"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <button
    //           type="submit"
    //           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //         >
    //           Sign up
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className=""></div>
  );
};

export default SignUpForm;
