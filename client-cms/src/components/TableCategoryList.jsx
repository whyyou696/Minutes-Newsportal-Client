import React from "react";

export default function TableCategoryList({ category }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <table className="w-full border-collapse border border-gray-300 min-w-full bg-white bg-opacity-90 rounded">
        <thead>
          <tr className="bg-gray-300 text-center font-bold text-lg border-b border-r border-white py-2 px-4">
            <th className="border-r border-white">ID</th>
            <th className="border-r border-white">Name</th>
          </tr>
        </thead>
        <tbody className="border-black text-center bg-gray-300">
          {category.map((categories) => (
            <tr key={categories.id} className="py-2 px-4 border-b border-white">
              <td className="border-r border-white text-center">{categories.id}</td>
              <td className="border-r border-white text-center">{categories.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}