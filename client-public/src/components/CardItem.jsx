import React, { useEffect, useState } from "react";
import Axios from "axios";
import DetailPage from "../pages/DetailPage";
export default function CardItem() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const response = await Axios.get("https://ch01-newsportal.wahyurj.my.id/publics");
      setArticles(response.data.article);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter articles based on the search query
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update currentItems based on the search query
  const currentItems = filteredArticles.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Search Input */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search News Here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ml-auto mr-8"
        />
      </div>

      {/* Display Articles */}
      <div className="flex flex-wrap justify-center mt-4">
        {currentItems.map((article, index) => (
          <div
            key={article.id}
            className={`m-4 transition duration-500 transform hover:scale-105`}
          >
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={article.imgUrl} alt="imgurl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{article.title}</h2>
                <div className="card-actions justify-end">
                  <DetailPage article={article} />
                  <button className="btn glass font-bold mt-10">Detail</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(filteredArticles.length / itemsPerPage),
        }).map((item, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1) }
            className="mx-2 bg-blue-500 text-black rounded-full px-4 py-2 transition-transform transform hover:bg-red-500 text-white"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
