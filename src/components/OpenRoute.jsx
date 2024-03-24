import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to={"/profile"} />;
  }
  return children;
}

export default OpenRoute;
