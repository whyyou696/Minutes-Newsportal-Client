import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditArticle () {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    title: "",
    content: "",
    imgUrl: "",
    categoryId: "",
    authorId: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://minutes-news.wahyurj.my.id/articles/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching article data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `https://minutes-news.wahyurj.my.id/articles/${id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Article Update Successfully!",
      });
      navigate("/home");
    } catch (error) {
      console.error("Error updating article:", error.message);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.response.data.message || "Error creating article",
      });
    }

  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md w-full">
      <h2 className="text-4xl font-bold mb-4 text-center italic">Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-bold text-gray-600">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={data.content}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-sm font-bold text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={data.imgUrl}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoryId" className="block text-sm font-bold text-gray-600">
            Category ID
          </label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
            value={data.categoryId}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="authorId" className="block text-sm font-bold text-gray-600">
            Author ID
          </label>
          <input
            type="text"
            id="authorId"
            name="authorId"
            value={data.authorId}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-300 text-white font-bold px-3 py-1 rounded-md transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

