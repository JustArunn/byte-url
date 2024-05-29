import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  return (
    <div className="w-full h-[calc(100%-60px)] flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Welcome !{" "}
        {user?.name && <span className="text-blue-500">{user.name}</span>}
      </h1>
      <div className="w-full">
        {token ? (
          <div className="flex justify-center items-center">
            <button className=" px-6 py-2 rounded-md border bg-[#e84949] sm:bg-transparent sm:border-[#e84949] sm:hover:bg-[#e84949] w-[50%] sm:w-[20%]">
              <Link to={"/profile"}>Profile</Link>
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center font-semibold w-full gap-2">
            <Link
              className="text-center px-6 py-2 rounded-md border bg-[#e84949] sm:bg-transparent sm:border-[#e84949] sm:hover:bg-[#e84949] w-[50%] sm:w-[20%]"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className="text-center px-6 py-2 rounded-md border bg-[#e84949] sm:bg-transparent sm:border-[#e84949] sm:hover:bg-[#e84949] w-[50%] sm:w-[20%]"
              to={"/signup"}
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
