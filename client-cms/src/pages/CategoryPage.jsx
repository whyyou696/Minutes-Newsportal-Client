import React, { useState, useEffect } from "react";
import Axios from "axios";
import TableCategoryList from "../components/TableCategoryList";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom"; // Import Link

export default function CategoryPage() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const response = await Axios.get("https://minutes-news.wahyurj.my.id/categories", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        });

        setCategory(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
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

  const handleNavigateHome = () => {
    navigate("/home");
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loading loading-lg"></div>
        </div>
      ) : (
        <div>
          <button
            onClick={handleNavigateHome}
            className="bg-red-400 hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 right-2"
          >
            Back
          </button>
          <Link to="/create-category">
            <button className="bg-green-400 hover:bg-green-300 hover:text-black transition-all ease-in-out duration-300 text-white font-bold px-2 py-1 rounded-md space-x-2 ml-2">
              Create Category
            </button>
          </Link>
          <TableCategoryList category={category} />
        </div>
      )}
    </div>
  );
}
