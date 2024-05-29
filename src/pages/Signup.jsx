import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/auth";
import { useDispatch } from "react-redux";

function Signup() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signup(formData, navigate, resetForm));
  }

  return (
    <div className="w-full h-[calc(100%-60px)]">
      <div className="w-full h-full flex gap-4 justify-center items-center flex-col">
        <h1 className="font-bold text-3xl ">Signup</h1>
        <form
          className="min-w-[calc(50%)] p-4 border border-black flex flex-col justify-center items-center gap-4 rounded-md sm:min-w-[20%]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Sellmon Bhoi"
              className=" border placeholder:pl-3 py-1 px-2 placeholder:text-[#0009] border-black rounded-md"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className=" border placeholder:pl-3 py-1 px-2 placeholder:text-[#0009] border-black rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="SecR3t Password"
              className=" border placeholder:pl-3 py-1 px-2 placeholder:text-[#0009] border-black rounded-md"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className=" px-6 py-2 rounded-md border bg-[#e84949] sm:bg-transparent sm:border-[#e84949] sm:hover:bg-[#e84949]"
          >
            Signup
          </button>
        </form>
        <div>
          <p>
            already have an account{" "}
            <Link className="text-blue-900 font-semibold" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
