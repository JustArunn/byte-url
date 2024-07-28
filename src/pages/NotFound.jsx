import { DefaultButton } from "@fluentui/react";
import { Link } from "react-router-dom";
import "./CSS/NotFound.css";

function NotFound() {
  return (
    <div className="fullscreen-container">
      <h1>404 - Not Found !</h1>
      <Link to="/">
        <DefaultButton className="default-button">Go to Home</DefaultButton>
      </Link>
    </div>
  );
}

export default NotFound;
