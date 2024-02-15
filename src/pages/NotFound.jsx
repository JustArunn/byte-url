import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-4">
      <h1 className="font-bold text-2xl ">404 : Not Found</h1>
      <Link className="border text-center px-20 py-2 rounded-md" to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
