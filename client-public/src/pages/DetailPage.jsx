import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  const fetchDataById = async () => {
    try {
      const { data } = await Axios.get(`https://ch01-newsportal.wahyurj.my.id/publics/${id}`);
      setArticle(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataById();
  }, []);

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-red-500 rounded-box place-items-center text-white font-extrabold italic text-3xl">{article.title}</div>
      </div>

      <div className="flex mt-10">
        <div className="relative overflow-hidden rounded-lg ml-10">
          <img
            src={article.imgUrl}
            alt="Description of the image"
            className="w-full h-auto rounded-lg"
          />
          {/* untuk gambar dari server */}
          <div className="absolute bottom-0 left-0 w-full  bg-white bg-opacity-75 p-4 text-center">
            <p className="text-sm text-gray-800 font-semibold italic">
              {/* Menampilkan deskripsi dari server */}
              {article.content}
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-blue-600 mt-20 italic">
        Kutipan berita di atas diambil dari server ©Minutes Newsportal
      </p>

      <div className="mt-5"></div>
    </div>
  );
}
