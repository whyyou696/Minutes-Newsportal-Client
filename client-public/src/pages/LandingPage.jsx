import React from "react";
import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar/>
        <div className="text-blue-600 animate-pulse hover:text-red-600 transition duration-300">
          <h1 className="text-4xl font-bold mt-40 text-center">GET YOUR UPDATE NEWS FROM HERE</h1>
        </div>
        <div className="text-center text-gray font-bold mt-10">
          <h2>
            Portal Berita terpercaya untuk anda baik dalam negeri maupun mancanegara 
            dapatkan update berita terkini dan terupdate dan terpercaya untuk anda
          </h2>
          <button className="btn bg-red-600 text-white font-bold mt-5 mr-7 mb-60">
            Baca Sekarang
          </button>
        </div>
    </div>
  );
}
