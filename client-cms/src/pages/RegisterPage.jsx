import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import registerImage from "../assets/bgregister.jpg";
import logo from "../assets/logo.png";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users/add-user", form, {
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Register Success",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.response.data.message,
      });
    }
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
          {/* Image */}
      <div className="w-30% h-full hidden md:block mr-10">
          <img src={registerImage} alt="Registration" className="w-full h-full object-cover" />
        </div>

      <div className="w-[70%] h-fit bg-white shadow-lg px-10 rounded-lg flex">
        <div className="flex-1">
        <div className="text-center text-sky-400 mt-10">
            <img src={logo} alt="Logo" className="w-25 h-20 mx-auto mb-3" />
            <h1 className="text-[30px] mb-3">Register</h1>
          </div>
          {/* Form */}
          <form onSubmit={submit} className="mb-10">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
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
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={changeInput}
              name="password"
              type="text"
              id="password"
              className="w-full p-2.5 shadow-md rounded-md"
              placeholder="*****"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              onChange={changeInput}
              name="phoneNumber"
              type="text"
              id="phoneNumber"
              className="w-full p-2.5 shadow-md rounded-md italic"
              placeholder="Input Here....."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              onChange={changeInput}
              name="address"
              type="text"
              id="address"
              className="w-full p-2.5 shadow-md rounded-md italic"
              placeholder="Input Here....."
            />
          </div>
            <div className="w-full h-fit flex justify-center items-center">
              <button
                type="submit"
                className="bg-sky-400 hover:bg-sky-300 transition-all ease-in-out duration-300 text-white px-10 py-2 rounded-md"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
        
    </section>
  );
}

export default Register;

