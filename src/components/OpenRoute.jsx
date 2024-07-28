import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const token = localStorage.getItem("byte-url-auth-token");
  if (token) {
    return <Navigate to={"/profile"} />;
  }
  return children;
}

export default OpenRoute;
