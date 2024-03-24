import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { deleteProfile, logout } from "../services/auth";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { TiUserDeleteOutline } from "react-icons/ti";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  function handleLogout() {
    dispatch(logout(navigate));
  }

  function handleDeleteProfile() {
    dispatch(deleteProfile(token, navigate));
  }

  return (
    <div className="w-full h-[60px] p-2 bg-[#e84949] sticky top-0">
      <nav className="flex justify-around items-center">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">BYTE</h1>
        </Link>
        <div className="hidden md:flex gap-1">
          <NavLink
            className={"hover:bg-[#ffffff50] rounded-md px-2 py-1"}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={"hover:bg-[#ffffff50] rounded-md px-2 py-1"}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={"hover:bg-[#ffffff50] rounded-md px-2 py-1"}
            to={"/contacts"}
          >
            Contacts
          </NavLink>
        </div>
        <div>
          {token ? (
            <div className="flex justify-center items-center">
              <button
                className=" flex gap-1 px-4 py-2 rounded-md font-semibold hover:bg-[#ffffff50]"
                onClick={handleDeleteProfile}
              >
                <TiUserDeleteOutline
                  className="border rounded-full border-black"
                  size={"25px"}
                />
                <p className="hidden md:flex">Delete Profile</p>
              </button>

              <button
                className="flex gap-1 px-4 py-2 rounded-md font-semibold hover:bg-[#ffffff50]"
                onClick={handleLogout}
              >
                <IoIosLogOut size={"25px"} />
                <p className="hidden md:flex">Logout</p>
              </button>

              <button
                onClick={() => navigate("/profile")}
                className="flex gap-1 px-4 py-2 rounded-md font-semibold hover:bg-[#ffffff50]"
              >
                {/* <Link to={"/profile"}> */}
                <CgProfile size={"25px"} />
                <p className="hidden md:flex">Profile</p>
                {/* </Link> */}
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 md:gap-0">
              <Link
                className=" px-4 py-2 rounded-md font-semibold bg-[#ffffff50] md:bg-transparent md:hover:bg-[#ffffff50]"
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className=" px-4 py-2 rounded-md font-semibold bg-[#ffffff50] md:bg-transparent md:hover:bg-[#ffffff50]"
                to={"/signup"}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
