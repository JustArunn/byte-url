import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth/index";
import { useDispatch } from "react-redux";
import { PrimaryButton, TextField } from "@fluentui/react";
import "./CSS/Login.css"

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function resetForm() {
    setFormData({
      email: "",
      password: "",
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(formData, navigate, resetForm));
  }

  return (
    <div className="fullScreenContainer">
      <div className="centeredContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h3 className="formTitle">Login</h3>
            <div className="formContent">
              <TextField
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="off"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                required
                autoComplete="off"
                placeholder="SecR3t"
                value={formData.password}
                onChange={handleChange}
              />
              <PrimaryButton className="submitButton" type="submit">
                Login
              </PrimaryButton>
              <div className="signupText">
                <p>
                  Don't have an account? <Link to={"/signup"}>Signup</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
