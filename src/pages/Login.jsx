import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLoading } from "../context";
import { Loader } from "../components";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading } = useLoading();
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="border p-4 rounded-md">
        <h1 className="text-center font-bold text-2xl">
          {loading ? <Loader /> : "Login"}
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(login)}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="true"
              placeholder="jungle@mangle.com"
              {...register("email", { required: true })}
              className="px-3 py-1 rounded-md "
            />
            {errors.email && (
              <span className="text-red-500 text-center">
                email is required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="true"
              placeholder="Password@123"
              {...register("password", { required: true })}
              className="px-3 py-1 rounded-md"
            />
            {errors.password && (
              <span className="text-red-500 text-center">
                password is required
              </span>
            )}
          </div>
          <button className="border py-2 rounded-md " type="submit">
            Login
          </button>
        </form>
        <hr className="mt-5" />
        <div className="mt-2">
          <span>Don't have an account ? </span>
          <Link className="text-blue-800 font-semibold" to={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
