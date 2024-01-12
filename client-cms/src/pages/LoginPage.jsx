import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setForm(() => ({
      ...form,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`https://minutes-news.wahyurj.my.id/users/login`, form);
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: `Welcome`,
      });
      localStorage.access_token = data.access_token;
      // console.log(data.access_token)
      navigate("/home");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.response.data.message,
      });
    }
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-[30%] h-fit bg-white shadow-lg px-10 rounded-lg flex">
        <div className="flex-1">
          <div className="text-center text-sky-400 mt-10">
            <img src={logo} alt="Logo" className="w-25 h-20 mx-auto mb-3" />
            <h1 className="text-[20px] mb-3 font-bold">Login</h1>
          </div>
          {/* Form */}
          <form onSubmit={submit} className="mb-4">
            <div className="mb-3">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                onChange={changeInput}
                name="email"
                type="text"
                id="email"
                className="w-full p-2.5 shadow-md rounded-md italic"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                onChange={changeInput}
                name="password"
                type="password"
                id="password"
                className="w-full p-2.5 shadow-md rounded-md"
                placeholder="*****"
              />
            </div>
            <div className="w-full h-fit flex justify-center items-center">
              <button
                type="submit"
                className="bg-sky-400 hover:bg-sky-300 transition-all ease-in-out duration-300 text-white px-8 py-2 rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

