import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios({
        method: "post",
        url: `http://localhost:3000/users/login`,
        data: form,
      });
      localStorage.setItem("access_token", data.access_token);
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/");
      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
        <div className="lg:w-1/2 bg-cover bg-center">
          <img
            src="./src/assets/bglogin.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative flex flex-col justify-center items-center p-6 m-auto bg-white bg-opacity-70 rounded-md shadow-xl shadow-blue-500/40 ring ring-2 ring-blue-500 lg:max-w-xl">
          <img src="./src/assets/logo.png" alt="Logo" className="w-20 h-20 mb-4" />
          <h1 className="text-3xl font-semibold text-center text-blue-500">
            Login
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </form>
          <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Login</button>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
