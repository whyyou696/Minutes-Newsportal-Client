import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

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
        className={`bg-white flex justify-between items-center p-2 ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50" : ""
        }`}
      >
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="flex items-center space-x-4 text-center">
          <div>
            <Link
              to="/home"
              className="text-gray text-sm font-bold hover:text-red-600 transition duration-300"
            >
              Article
            </Link>
          </div>
          <div>
            <Link
              to="/categories"
              className="text-gray text-sm font-bold hover:text-blue-500 transition duration-300"
            >
              Categories
            </Link>
          </div>
          <div>
            <Link
              to="/register"
              className="text-gray text-sm font-bold hover:text-green-500 transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="h-16"></div> {/* Add a spacer to prevent content from being overlapped by the fixed navbar */}
    </>
  );
}
