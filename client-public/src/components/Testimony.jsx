import React from "react";
export default function Testimony() {
  return (
    <>
      <div className="flex justify-center mt-7 mb-20">
        <div className="card card-side bg-base-100 shadow-xl mt-20 mx-5">
          <figure>
            <img
              src="https://img.jakpost.net/c/2023/11/24/2023_11_24_144669_1700807264._large.jpg"
              alt="Photo"
              className="object-cover w-48 h-48"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ganjar Pranowo</h2>
            <p>
            Terupdate,Teraktual, dan Terpercaya Untuk Kita Semua
            <br/>Tanpa Adanya Hoax
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
            </div>
          </div>
        </div>
        {/* Testimony2 */}
        <div className="card card-side bg-base-100 shadow-xl mt-20 mx-5">
          <figure>
            <img
              src="https://awsimages.detik.net.id/visual/2023/09/21/prabowo-subianto_11.png?q=90&w=500"
              alt="Photo"
              className="object-cover w-48 h-48"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Prabowo Subianto</h2>
            <p>
              Memberikan Pengalaman Terbaik Untuk Anda
              <br />
              100% Trusted and recommended.
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-red-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-red-600"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-red-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-red-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-red-600"
              />
            </div>
          </div>
        </div>
        {/* Testimony3 */}
        <div className="card card-side bg-base-100 shadow-xl mt-20 mx-5">
          <figure>
            <img
              src="https://img.jakpost.net/c/2023/11/24/2023_11_24_144671_1700807264._large.jpg"
              alt="Photo"
              className="object-cover w-48 h-48"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Anies Baswedan</h2>
            <p>
              Baca Berita Disini dan Dapatkan Pengalaman Baru
              <br />
              Yang Tidak Ada Di Portal News Lain
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
