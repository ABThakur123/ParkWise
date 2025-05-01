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
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wide font-sans">
          ParkWise
        </Link>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-800"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
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
