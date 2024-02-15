import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      {localStorage.getItem("token") ? (
        <Link
          className="border text-center px-20 py-2 rounded-md"
          to={"/profile"}
        >
          <button>Profile</button>
        </Link>
      ) : (
        <div className="flex flex-col gap-2">
          <Link
            className="border text-center px-20 py-2 rounded-md"
            to={"/signup"}
          >
            <button>Signup</button>
          </Link>
          <Link
            className="border text-center px-20 py-2 rounded-md"
            to={"/login"}
          >
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
