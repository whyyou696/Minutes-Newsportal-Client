import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function UploadImage() {
    const { id } = useParams();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const image = e.target.files[0];
      console.log(image);
      setFile(image);
    };
  
    const handleSubmitForm = async (e) => {
      try {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imgUrl", file);

        const { data } = await axios({
          method: "patch",
        //  url: `https://minutes-news.wahyurj.my.id/articles/${id}/imgurl`,
        url: `http://localhost:3000/articles/${id}/imgurl`,
          data: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          },
        });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Image uploaded successfully!",
        data: data,
      });
      navigate("/home");
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.response.data.message || "Error uploading image",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Image for Article ID: {id}</h2>
      <form onSubmit={handleSubmitForm}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Choose Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Upload Image
        </button>
        <Link to="/home" className="block mt-4 text-blue-500 hover:underline">
          Back to Home
        </Link>
      </form>
    </div>
  );
}
