import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-8 sm:py-16">
      <div className="bg-white p-6 sm:p-10 md:p-12 shadow-2xl rounded-3xl w-full max-w-2xl mx-4 sm:mx-6 border border-gray-100 transition-all duration-500 my-8 sm:my-12 hover:shadow-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 text-gray-900 tracking-tight">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className="space-y-5 sm:space-y-6 md:space-y-7">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base sm:text-lg text-gray-800 placeholder-gray-500 transition-all duration-300 hover:border-gray-300"
            required
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base sm:text-lg text-gray-800 placeholder-gray-500 transition-all duration-300 hover:border-gray-300"
              required
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base sm:text-lg text-gray-800 placeholder-gray-500 transition-all duration-300 hover:border-gray-300"
            required
          />
          {!isSignUp && (
            <a
              href="#"
              className="text-indigo-600 text-sm sm:text-base float-right hover:underline transition duration-200 font-medium"
            >
              Forgot Password?
            </a>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 sm:py-4 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm sm:text-base mt-6 sm:mt-8 md:mt-10">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-600 hover:underline font-semibold transition duration-200"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
        <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10">
          <div className="w-12 sm:w-16 md:w-20 h-px bg-gray-300"></div>
          <span className="mx-4 sm:mx-6 text-gray-500 text-sm font-medium">
            Or
          </span>
          <div className="w-12 sm:w-16 md:w-20 h-px bg-gray-300"></div>
        </div>
        <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
          <button className="w-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 sm:py-4 rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg">
            <FaFacebook className="mr-2 sm:mr-3 text-xl sm:text-2xl" /> Login
            with Facebook
          </button>
          <button className="w-full flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-3 sm:py-4 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg border border-gray-200">
            <FaGoogle className="mr-2 sm:mr-3 text-xl sm:text-2xl" /> Login with
            Google
          </button>
        </div>
      </div>
    </div>
  );
}