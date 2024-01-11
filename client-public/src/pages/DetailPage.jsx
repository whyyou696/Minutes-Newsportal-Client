import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function DetailPage () {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticleById = async () => {
      try {
        const response = await Axios.get(`https://minutes-news.wahyurj.my.id/publics/${id}`);
        setArticle(response.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchArticleById();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loading loading-lg"></div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <img
            src={article.imgUrl}
            alt="Article"
            className="w-full h-96 object-cover mx-auto"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{article.title}</h1>
            <p className="text-gray-600">{article.content}</p>
            <span className="inline-block bg-blue-500 text-white px-3 py-2 rounded-full mt-5">
              Category: {article.categoryId}
            </span>
          </div>
          <div className="p-4 flex justify-end">
            <Link to="/" className="inline-block bg-red-500 text-white px-3 py-2 rounded-full mt-5 hover:bg-gray-500">
              Back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
