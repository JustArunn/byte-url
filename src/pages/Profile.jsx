import { useEffect } from "react";
import CreateUrl from "../components/CreateUrl";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../services/auth";
import { useNavigate } from "react-router-dom";
import UrlTable from "../components/UrlTable";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(profile(token, navigate));
  },[]);

  return (
    <div className="w-full h-[calc(100%-60px)] ">
      <h1 className="text-2xl font-bold text-center mt-10">
        Welcome back !{" "}
        {user?.name && <span className="text-[#e84949]">{user.name}</span>}
      </h1>
      <div className="flex justify-center border mt-10">
        <CreateUrl />
      </div>
      <div className="w-full flex justify-center">
        <UrlTable />
      </div>
    </div>
  );
}

export default Profile;
