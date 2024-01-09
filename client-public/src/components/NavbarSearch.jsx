import React from "react";

function NavbarSearch() {
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
              href="#"
              className="text-gray text-lg font-bold hover:text-red-600 animate-pulse transition duration-300"
            >
              Home
            </a>
          </div>
          <div className="mx-4">
            <a
              href="#"
              className="text-gray text-lg font-bold hover:text-blue-500 animate-pulse transition duration-300"
            >
              Contacts
            </a>
          </div>
          
          <div className="mx-4">
            <input
              type="text"
              placeholder="Cari Disini....."
              className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
            />
            <button className="ml-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarSearch;
