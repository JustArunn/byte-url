import React from "react";
import { Link } from "react-router-dom";
import { FaUnlink } from "react-icons/fa";
import { useUrls } from "../context";

const Footer = () => {
  const { urls } = useUrls();

  return (
    <div>
      <div className="bg-black text-center py-4 px-10 mt-10">
        <p>
          Made with <span className="text-red-700">❤</span> by{" "}
          <Link
            className="text-blue-500 hover:text-blue-800"
            to={"https://github.com/JustArunn"}
            target="_blank"
          >
            JustArunn
          </Link>
        </p>
        <hr className="mt-4 mb-4" />
        <p className="flex justify-center items-center gap-2">
          Copyright &copy; {new Date().getFullYear()} | Short <FaUnlink />
        </p>
      </div>
    </div>
  );
};

export default Footer;
