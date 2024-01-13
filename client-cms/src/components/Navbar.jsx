// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-gray-100 flex justify-between items-center p-3 ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50" : ""
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>
        <div className="flex items-center space-x-4 text-center">
          <div>
            <button
              onClick={() => navigate("/home")}
              className="bg-gray-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
            >
              Article
            </button>
            <button
              onClick={() => navigate("/categories")}
              className="bg-gray-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
            >
              Categories
            </button>
            <Link to="/create-article">
              <button
                className="bg-gray-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
              >
                Create Article
              </button>
            </Link>
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
            >
              Register
            </button>
            <button
              type="submit"
              onClick={handleLogout}
              className="bg-red-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </>
  );
}
