import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white bg-opacity-20 border-b border-white border-opacity-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wide font-sans drop-shadow-lg">
          ParkWise
        </Link>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-5 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border border-white border-opacity-50"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-white border-opacity-50"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
