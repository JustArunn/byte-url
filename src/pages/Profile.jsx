import React, { useEffect } from "react";
import UrlTables from "../components/UrlTables";
import { useAuth, useUser } from "../context";
import CreateUrl from "../components/CreateUrl";

const Profile = () => {
  const { profile } = useAuth();

  useEffect(() => {
    profile();
  }, []);

  const { user } = useUser();

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 gap-5">
        <h2 className="text-xl lg:text-2xl lg:font-semibold">
          Welcome back !{" "}
          <span className="text-[20px] text-blue-700 ">{user.name}</span>
        </h2>
        <div>
          <CreateUrl />
        </div>
        <div>
          <UrlTables />
        </div>
      </div>
    </div>
  );
};

export default Profile;
