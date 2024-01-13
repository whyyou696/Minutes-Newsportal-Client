// TableArticleList.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TableArticleList({ articles, onDelete }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md w-full">
      <h2 className="text-4xl font-bold mb-4 text-center italic">
        Article List
      </h2>
      <div className="bg-gray-100 flex justify-between items-center p-3 shadow-md">
        <div className="flex items-center space-x-2">
          <Link
            to="/home"
            className="bg-blue-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
          >
            Article
          </Link>
          <Link
            to="/categories"
            className="bg-blue-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
          >
            Categories
          </Link>
          <Link
            to="/create-article"
            className="bg-blue-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2"
          >
            Create Article
          </Link>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-300 min-w-full bg-gray-100 bg-opacity-90 rounded">
        <thead>
          <tr className="bg-gray-300 text-black text-center font-bold text-lg border-b border-r border-white py-2 px-4">
            <th className="border-r border-white">ID</th>
            <th className="border-r border-white">Title</th>
            <th className="border-r border-white">Content</th>
            <th className="border-r border-white">Image</th>
            <th className="border-r border-white">Category ID</th>
            <th className="border-r border-white">Author ID</th>
            <th className="border-r border-white">Action</th>
          </tr>
        </thead>
        <tbody className=" border-gray-500 text-center bg-gray-300">
          {articles.map((article) => (
            <tr key={article.id} className="py-2 px-4 border-b border-white">
              <td className="border-r border-white">{article.id}</td>
              <td className="border-r border-white">{article.title}</td>
              <td className="border-r border-white">{article.content}</td>
              <td className="border-r border-white">
                <img
                  src={article.imgUrl}
                  alt={article.title}
                  width="300"
                  height="200"
                />
              </td>
              <td className="border-r border-white">{article.categoryId}</td>
              <td className="border-r border-white">{article.authorId}</td>
              <td>
                <Link
                  to={`/upload/${article.id}`}
                  className="bg-yellow-400 text-white font-bold hover:bg-yellow-300 hover:text-black px-3 py-1 rounded-md mr-2 mt-5 transition duration-300"
                >
                  Upload
                </Link>
                <Link
                  to={`/edit-article/${article.id}`}
                  className="bg-blue-400 text-white font-bold hover:bg-blue-300 hover:text-black px-3 py-1 rounded-md mr-2 mt-2 transition duration-300"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(article.id)}
                  className="bg-red-400 text-white font-bold hover:bg-red-300 hover:text-black px-3 py-1 rounded-md mr-2 mt-2 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
