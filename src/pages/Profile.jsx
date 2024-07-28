import { useEffect } from "react";
import CreateUrl from "../components/CreateUrl";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../services/auth";
import { useNavigate } from "react-router-dom";
import UrlTable from "../components/UrlTable";
import Navbar from "../components/Navbar";
import "./CSS/Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(profile(token, navigate));
  }, []);

  return (
    <div className="container1">
      <div className="inner-container">
        <Navbar />
        <h1 className="user-name-container">
          Welcome back !{" "}
          {user?.name && <span className="user-name">{user.name}</span>}
        </h1>
        <CreateUrl />
        <UrlTable />
      </div>
    </div>
  );
}

export default Profile;
