import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProfile, logout } from "../services/auth";
import { IconButton } from "@fluentui/react";

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
      <div
        style={{
          backgroundColor: "rgb(0,112, 220)",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#fff", fontWeight: "200" }}>Byte URL</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <IconButton
            iconProps={{ iconName: "SignOut" }}
            title="Logout"
            ariaLabel="Logout"
            styles={{root:{color:"#ffff"}}}
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
