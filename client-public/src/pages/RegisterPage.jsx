import React from "react";

export default function RegisterPage() {
  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      <div className="lg:w-1/2 bg-cover bg-center">
        <img
          src="./src/assets/bgregister.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative flex flex-col justify-center items-center p-6 m-auto bg-white bg-opacity-70 rounded-md shadow-xl shadow-blue-500/40 ring ring-2 ring-blue-500 lg:max-w-xl">
        <img src="./src/assets/logo.png" alt="Logo" className="w-20 h-20 mb-4" />
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          Register
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </form>
        <button className="btn btn-outline btn-info">Register</button>

      </div>
    </div>
  </>
  );
}

