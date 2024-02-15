import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context";
import { FaUnlink } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <nav className="bg-black flex justify-between items-center p-4 sticky top-0 lg:justify-around">
      <div className="text-2xl font-semibold hover:text-blue-800">
        <Link to={"/"}>
          <h1 className="flex justify-center items-center gap-4">
            <span className="hidden lg:flex ">Short</span>{" "}
            <FaUnlink className="text-2xl" />
          </h1>
        </Link>
      </div>
      <ul className="flex gap-4">
        <li className="hover:text-blue-800">
          <NavLink className={"flex gap-2 items-center"} to={"/"}>
            <AiFillHome className="text-2xl" />
            <p className="hidden lg:flex ">Home</p>
          </NavLink>
        </li>

        <li className="hover:text-blue-800">
          <NavLink className={"flex gap-2 items-center"} to={"/about"}>
            <IoInformationCircle className="text-2xl" />
            <p className="hidden lg:flex ">About</p>
          </NavLink>
        </li>

        <li className="hover:text-blue-800">
          <NavLink className={"flex gap-2 items-center"} to={"/contacts"}>
            <MdContacts className="text-2xl" />
            <p className="hidden lg:flex ">Contacts</p>
          </NavLink>
        </li>
      </ul>
      <div>
        {localStorage.getItem("token") ? (
          <div className="flex gap-4 items-center">
            <Link
              className="flex gap-2 justify-center items-center"
              to={"/profile"}
            >
              <CgProfile className="text-2xl" />
              <button className="hidden lg:flex ">Profile</button>
            </Link>

            {/* <Link className="flex gap-2 justify-center items-center " to={"/"}> */}
            <button
              className="flex gap-2 justify-center items-center"
              onClick={logout}
            >
              <IoIosLogOut className="text-2xl" />
              <p className="hidden lg:flex ">Logout</p>
            </button>
            {/* </Link> */}
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              className="hidden lg:flex border px-4 py-2 rounded-md"
              to={"/login"}
            >
              <button>Login</button>
            </Link>
            <Link
              className="hidden lg:flex border px-4 py-2 rounded-md"
              to={"/signup"}
            >
              <button>Signup</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
