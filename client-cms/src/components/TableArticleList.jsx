import React from "react";

export default function TableArticleList({ articles }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <table className="w-full border-collapse border border-gray-300 min-w-full bg-white bg-opacity-90 rounded">
        <thead>
          <tr className="bg-red-500 text-white text-center font-bold text-lg border-b border-r border-white py-2 px-4">
            <th className="border-r border-white">ID</th>
            <th className="border-r border-white">Title</th>
            <th className="border-r border-white">Content</th>
            <th className="border-r border-white">Image</th>
            <th className="border-r border-white">Category ID</th>
            <th className="border-r border-white">Author ID</th>
            <th className="border-r border-white">Action</th>
          </tr>
        </thead>
        <tbody className=" border-gray-500 text-center bg-red-500 text-white
        ">
          {articles.map((article) => (
            <tr key={article.id} className="py-2 px-4 border-b border-white">
              <td className="border-r border-white">{article.id}</td>
              <td className="border-r border-white">{article.title}</td>
              <td className="border-r border-white">{article.content}</td>
              <td>
                <img src={article.imgUrl} alt={article.title} width="1500" height="1500" />
              </td>
              <td className="border-r border-white">{article.categoryId}</td>
              <td className="border-r border-white">{article.authorId}</td>
              <td>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">Update</button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 mt-2">Upload</button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md mt-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
