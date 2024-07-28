import { PrimaryButton } from "@fluentui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CSS/Home.css"
function Home() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="fullscreen-container">
    {token ? (
      <div className="column-gap">
        <h1>Go to profile</h1>
        <Link to="/profile">
          <PrimaryButton className="primary-button">
            Profile
          </PrimaryButton>
        </Link>
      </div>
    ) : (
      <div className="column-gap">
        <Link to="/login">
          <PrimaryButton className="primary-button">
            Login
          </PrimaryButton>
        </Link>
        <Link to="/signup">
          <PrimaryButton className="primary-button">
            Signup
          </PrimaryButton>
        </Link>
      </div>
    )}
  </div>
  );
}

export default Home;
