import React, { useState, useEffect } from "react";
import Axios from "axios";
import TableCategoryList from "../components/TableCategoryList"
import Swal from "sweetalert2";

export default function CategoryPage() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        // const response = await Axios.get("https://minutes-news.wahyurj.my.id/categories")
        const response = await Axios.get(
            "https://minutes-news.wahyurj.my.id/categories",{
            headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        // const response = await Axios.get("http://localhost:3000/categories");
        setCategory(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
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

  return (
    <div>
      {loading ? (
            <div className="flex items-center justify-center h-screen">
            <div className="loading loading-lg"></div>
          </div>
      ) : (
        <TableCategoryList category={category} />
      )}
    </div>
  );
};
