import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CardItem() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3000/publics");
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
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="flex flex-wrap justify-center mt-20">
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
                <p>{article.content}</p>
                <div className="card-actions justify-end">
                  <p>{article.categoryId}</p>
                  <button className="btn btn-error">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(articles.length / itemsPerPage) }).map(
          (item, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className="mx-2 bg-blue-500 text-black rounded-full px-4 py-2 transition-transform transform hover:bg-red-500 text-white"
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
