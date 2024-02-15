import React, { useEffect, useState } from "react";
import UrlTables from "../components/UrlTables";
import { useAuth, useUser } from "../context";
import CreateUrl from "../components/CreateUrl";

const Profile = () => {
  const [count, setCount] = useState(0);
  const { profile } = useAuth();

  useEffect(() => {
    profile();
  }, [count]);

  const { user } = useUser();

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 gap-5">
        <h2 className="text-xl lg:text-2xl lg:font-semibold">
          Welcome back !{" "}
          <span className="text-[20px] text-blue-700 ">{user.name}</span>
        </h2>
        <div className="flex gap-2">
          <CreateUrl />
          <button
            className="border py-1 rounded-md px-4"
            onClick={() => setCount(count + 1)}
          >
            refresh
          </button>
        </div>
        <div>
          <UrlTables />
        </div>
      </div>
    </div>
  );
};

export default Profile;
