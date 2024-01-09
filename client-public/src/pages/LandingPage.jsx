import React from "react";

export default function LandingPage() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('./src/assets/bg.jpg')`,
        }}
      >
        <div className="bg-white flex justify-between items-center p-4 hover:bg-white bg-opacity-0 animate-pulse transition duration-300">
          <div className="flex items-center">
            <div className="mx-4">
              <a
                href="/"
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
                Articles
              </a>
            </div>
            <div className="mx-4">
              <a
                href="#"
                className="text-gray text-lg font-bold hover:text-blue-500 animate-pulse transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}
