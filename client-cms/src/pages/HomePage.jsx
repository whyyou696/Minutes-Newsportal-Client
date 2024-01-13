import React, { useState, useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import TableArticleList from "../components/TableArticleList";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataArticle = async () => {
      try {
        const response = await Axios.get("https://minutes-news.wahyurj.my.id/articles", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        });
        setArticles(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    };

    fetchDataArticle();
  }, []);

  const handleDelete = async (articleId) => {
    try {
      await Axios.delete(`https://minutes-news.wahyurj.my.id/articles/${articleId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== articleId));

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Article deleted successfully!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loading loading-lg"></div>
        </div>
      ) : (
        <TableArticleList articles={articles} onDelete={handleDelete} />
      )}
    </div>
  );
}
