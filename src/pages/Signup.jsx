import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLoading } from "../context";
import { Loader } from "../components";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading } = useLoading();
  const { signup } = useAuth();
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
          {loading ? <Loader/> : "Signup"}
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(signup)}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="true"
              placeholder="Arun..."
              {...register("name", { required: true })}
              className="px-3 py-1 rounded-md "
            />
            {errors.name && <span>name is required</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="true"
              placeholder="jungle@mangle.com"
              {...register("email", { required: true })}
              className="px-3 py-1 rounded-md "
            />
            {errors.email && <span>email is required</span>}
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
              className="px-3 py-1 rounded-md "
            />
            {errors.password && <span>password is required</span>}
          </div>
          <button className="border py-2 rounded-md " type="submit">
            Signup
          </button>
        </form>
        <hr className="mt-5" />
        <div className="mt-2">
          <span>Already have an account ? </span>
          <Link className="text-blue-800 font-semibold" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
