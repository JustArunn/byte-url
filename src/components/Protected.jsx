import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);
  return <>{children}</>;
};

export default Protected;
