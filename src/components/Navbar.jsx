import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProfile, logout } from "../services/auth";
import { IconButton } from "@fluentui/react";
import "./CSS/Navbar.css";

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
    <div>
      <div className="header-container">
        <h1 className="header-title">Byte URL</h1>
        <div className="icon-container">
          <IconButton
            iconProps={{ iconName: "SignOut" }}
            title="Logout"
            ariaLabel="Logout"
            className="icon-button"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
