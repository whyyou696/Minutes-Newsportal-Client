import React from "react";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="footer footer-center bg-white text-black rounded p-2 text-lg">
      <nav className="grid grid-flow-col gap-4">
        <a href="/" className="link font-bold  text-red-600 hover:text-blue-600 transition duration-300 link-hover animate-pulse">
          Home
        </a>
        <a href="/" className="link font-bold text-blue-600 hover:text-red-600 transition duration-300 link-hover animate-pulse">
          Contact
        </a>
      </nav>
      <nav>
        <a href="/" className="font-bold">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '120px' }}
          />
        </a>
      </nav>
        <p style={{fontSize: '15px'}}>Copyright © 2023 - Minutes Newsportal</p>
    </footer>
  );
}

