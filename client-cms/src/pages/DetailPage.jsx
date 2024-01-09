import React from "react";
import Footer from "../components/Footer";
import NavbarSearch from "../components/NavbarSearch";

export default function DetailPage() {
  return (
    <div>
      <NavbarSearch />

      <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-red-500 rounded-box place-items-center text-white font-extrabold italic text-3xl">
          Untuk Title Yang diambil Dari Server, Dan Di Tambahkan Di Sini
        </div>
      </div>

      <div className="flex mt-10">
        <div className="relative overflow-hidden rounded-lg ml-10">
          <img
            src="https://akcdn.detik.net.id/community/media/visual/2023/12/14/fajar-alfian-muhammad-rian-ardianto_169.jpeg?w=700&q=90"
            alt="Description of the image"
            className="w-full h-auto rounded-lg"
          />
          {/* untuk gambar dari server */}
          <div className="absolute bottom-0 left-0 w-full  bg-white bg-opacity-75 p-4 text-center">
            <p className="text-sm text-gray-800 font-semibold italic">
              {/* untuk title dari server */}
              untuk imgUrl http:nya taruh disini dari server
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-blue-600 mt-20 italic">
        Kutipan berita diatas diambil dari server ©Minutes Newsportal
      </p>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
