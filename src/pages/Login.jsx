import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth/index";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function resetForm() {
    setFormData({
      email: "",
      password: "",
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(formData, navigate, resetForm));
  }

  return (
    <div className="w-full h-[calc(100%-60px)]">
      <div className="w-full h-full flex gap-4 justify-center items-center flex-col">
        <h1 className="font-bold text-3xl ">Login</h1>
        <form
          className="min-w-[calc(50%)] p-4 border border-black flex flex-col justify-center items-center gap-4 rounded-md md:min-w-[20%]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className=" border placeholder:pl-3 py-1 placeholder:text-[#0009] border-black rounded-md"
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
              className=" border placeholder:pl-3 py-1 placeholder:text-[#0009] border-black rounded-md"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className=" px-6 py-2 rounded-md border bg-[#e84949] md:bg-transparent md:border-[#e84949] md:hover:bg-[#e84949]"
          >
            Login
          </button>
        </form>
        <div>
          <p>
            don&apos;t have an account?{" "}
            <Link
              className="text-blue-900 font-semibold hover:text-blue-950"
              to={"/signup"}
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
