import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CreateCategory() {
  const [newCategory, setNewCategory] = useState({
    id: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleCreateCategory = async () => {
    try {
      const response = await Axios.post(
        "https://minutes-news.wahyurj.my.id/categories",
        newCategory,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );

      // Handle successful category creation
      // You can show a success message or redirect to the category list

      // For example:
      Swal.fire({
        icon: "success",
        title: "Category Created",
        text: "New category has been created successfully!",
      });
      navigate("/categories"); // Redirect to the category page after creation
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create New Category</h2>
      <div className="mb-4">
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-600">
          ID:
        </label>
        <input
          type="text"
          id="categoryId"
          name="id"
          value={newCategory.id}
          onChange={handleInputChange}
          placeholder="Enter category ID"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-600">
          Name:
        </label>
        <input
          type="text"
          id="categoryName"
          name="name"
          value={newCategory.name}
          onChange={handleInputChange}
          placeholder="Enter category name"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        onClick={handleCreateCategory}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300"
      >
        Create
      </button>
    </div>
  );
}
