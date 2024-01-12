import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer bg-gray-200 text-black rounded p-6 text-lg mt-10 font-bold">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:col-span-2 lg:col-span-1">
          <p className="text-sm mt-4">
            Portal Berita yang Terupdate, Terpercaya, Dan Teraktual. Memberikan
            Akses dan Kenyamanan untuk anda membaca Berita
          </p>
        </div>
        <div className="col-span-2 flex justify-center items-center flex-col md:flex-row ">
          <a href="/" className="font-bold mb-4 md:mb-0 md:mr-4">
            <img src={logo} alt="Logo" style={{ width: "120px" }} />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-600 text-center md:text-left">
        &copy; 2023 - Minutes Newsportal. All rights reserved.
      </p>
    </footer>
  );
}
