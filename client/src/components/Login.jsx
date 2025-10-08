import { useState } from "react";
import axios from "axios";
import { object, string } from "yup";

const Login = ({ setToken }) => {
  // validation schema
  const userSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Valid email is required"),
    password: string()
      .trim()
      .required("Password is required")
      .min(1, "Password is required"),
  });

  // State variables to store user input and validation status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    //You can also send the data to your backend server for authentication
    await loginUser({
      email,
      password,
    });
  };

  // function to log in user and get token from server
  const loginUser = async (credentials) => {
    try {
      userSchema.validateSync(credentials, {
        abortEarly: false,
      });
    } catch (error) {
      // reset previous errors
      setEmailError("");
      setPasswordError("");

      // handle each validation error
      error.inner.forEach((err) => {
        if (err.path === "email") {
          setEmailError(err.message);
        }

        if (err.path === "password") {
          setPasswordError(err.message);
        }
      });
      return;
    }

    setIsLoading(true);
    setEmailError("");
    setPasswordError("");

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (response) {
        setToken(response.data.token, response.data.user._id);
      })
      .catch(function (error) {
        console.log("Login error:", error);
        if (error.response?.data?.message) {
          setEmailError(error.response.data.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="my-10 md:my-20 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center dark:text-lightblue mb-10 md:mb-20">
        ENTER YOUR KITCHEN
      </h1>
      <form className="max-w-sm mx-auto space-y-4 md:space-y-6">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
          >
            Your email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`bg-gray-50 border ${
              emailError ? "border-red-500" : "border-gray-300"
            }  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            id="email"
            placeholder="name@email.com"
            required
          />
          {emailError && (
            <p className="mt-2 text-sm text-red-500">{emailError}</p>
          )}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`bg-gray-50 border ${
              passwordError ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            id="password"
            required
          />
          {passwordError && (
            <p className="mt-2 text-sm text-red-500">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
              SIGNING IN...
            </>
          ) : (
            "SIGN IN"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
