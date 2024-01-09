import React from "react";
import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar/>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-blue-600 animate-pulse hover:text-red-600 transition duration-300">
          <h1 className="text-4xl font-bold">GET YOUR UPDATE NEWS FROM HERE</h1>
        </div>
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center text-gray font-bold">
          <h2>
            Portal Berita terpercaya untuk anda baik dalam negeri maupun mancanegara 
            dapatkan update berita terkini dan terupdate dan terpercaya untuk anda
          </h2>
          <button className="btn bg-red-600 text-white font-bold mt-5 mr-7">
            Baca Sekarang
          </button>
        </div>
    </>
  );
}
