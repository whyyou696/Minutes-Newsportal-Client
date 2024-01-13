import React from "react";
import { Link } from "react-router-dom";

function CardItem({ articles, searchQuery, setSearchQuery, paginate, currentPage, totalPages }) {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search News Here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ml-auto mr-8"
        />
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="m-4 transition duration-500 transform hover:scale-105"
          >
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={article.imgUrl} alt="imgurl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-bold italic text-red-500">
                  {article.title}
                </h2>
                <div className="card-actions justify-end">
                  <Link
                    to={`/details/${article.id}`}
                    className="btn glass font-bold mt-10"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 ${
              currentPage === index + 1
                ? "bg-blue-500 text-black"
                : "bg-gray-400 text-white"
            } rounded-full px-4 py-2 transition-transform transform hover:bg-red-500`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
