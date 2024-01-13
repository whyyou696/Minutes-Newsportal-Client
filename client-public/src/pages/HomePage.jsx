import React, { useEffect, useState } from "react";
import Axios from "axios";
import CardItem from "../components/CardItem";
import Swal from "sweetalert2";
import Testimony from "../components/testimony";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://minutes-news.wahyurj.my.id/publics");
        setArticles(response.data.article);
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

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentItems = filteredArticles.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Carousel />
      <div>
        {loading && (
          <div className="flex items-center justify-center h-screen">
            <div className="loading loading-lg"></div>
          </div>
        )}

        {!loading && (
          <CardItem
            articles={currentItems}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            paginate={paginate}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
      <Testimony />
    </>
  );
};

export default HomePage;
