import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/auth";
import { useDispatch } from "react-redux";
import { PrimaryButton, TextField } from "@fluentui/react";
import "./CSS/Signup.css"

function Signup() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signup(formData, navigate, resetForm));
  }

  return (
    <div className="fullScreenContainer">
    <div className="centeredContainer">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h3 className="formTitle">Signup</h3>
          <div className="formContent">
            <TextField
              label="Name"
              name="name"
              type="text"
              required
              autoComplete="off"
              placeholder="Sellmon"
              value={formData.name}
              onChange={handleChange}
            />
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
            <PrimaryButton className="submitButton" type="submit">Signup</PrimaryButton>
            <div className="signupText">
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Signup;
