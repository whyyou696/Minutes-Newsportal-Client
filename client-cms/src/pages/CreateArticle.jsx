import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function CreateArticle() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    imgUrl: "",
    categoryId: "",
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const response = await axios.get(
          "https://minutes-news.wahyurj.my.id/categories",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    };

    fetchDataCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://minutes-news.wahyurj.my.id/articles",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Article created successfully!",
      });

      // Navigate back to /home
      navigate("/home");
    } catch (error) {
      console.error("Error creating article:", error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.response.data.message || "Error creating article",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Article</h2>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <form id="createArticleForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-600"
            >
              Id
            </label>
            <input
              type="Number"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-600"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imgUrl"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id || index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <input type="hidden" name="id" value={formData.id} />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Create Article
          </button>
        </form>
      )}
    </div>
  );
}
