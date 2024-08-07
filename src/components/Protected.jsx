import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const token = localStorage.getItem("byte-url-auth-token");
  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default Protected;