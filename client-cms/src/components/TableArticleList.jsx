// TableArticleList.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TableArticleList({ articles }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md w-full">
      <table className="w-full border-collapse border border-gray-300 min-w-full bg-gray-100 bg-opacity-90 rounded">
        <thead>
          <tr className="bg-gray-300 text-black text-center font-bold text-lg border-b border-r border-white py-2 px-4">
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
                <img src={article.imgUrl} alt={article.title} width="300" height="200" />
              </td>
              <td className="border-r border-white">{article.categoryId}</td>
              <td className="border-r border-white">{article.authorId}</td>
              <td>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 mt-2">
                  Update
                </button>
                <Link to={`/upload/${article.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 mt-3">
                  Upload
                </Link>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md mt-2 mb-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
