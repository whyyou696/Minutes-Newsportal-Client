import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            className="w-25 h-20"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-4">
            <a
              href="/"
              className="text-gray text-lg font-bold hover:text-red-600 animate-pulse transition duration-300"
            >
              Article
            </a>
          </div>
          <div className="mx-4">
            <a
              href="/categories"
              className="text-gray text-lg font-bold hover:text-blue-500 animate-pulse transition duration-300"
            >
              Category
            </a>
          </div>
          <div className="mx-4">
            <a
              href="/categories"
              className="text-gray text-lg font-bold hover:text-blue-500 animate-pulse transition duration-300"
            >
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
