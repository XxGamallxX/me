import { useState } from "react";
import MediaQuery from "react-responsive";
import { NavLink, useNavigate } from "react-router-dom";
import { useauthContext } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
    const { login } = useauthContext();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === userData.email && u.password === userData.password
    );

    if (user) {
      // Store logged in user info

      login(user)
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="myauthbg d-flex align-items-center justify-content-center flex-nowrap ">
        <MediaQuery minWidth={1224}>
          <h1 className="m-3 mt-5 align-self-start text-white position-absolute top-right-text">
            <strong>RAFEEQ</strong>
          </h1>
        </MediaQuery>

        <div className="w-60 py-5 form-container d-flex my-auto justify-content-center align-items-center ">
          <div className="w-75 h-max-content">
            <h2 className="card-title ">
              <strong>Login</strong>
            </h2>
            <p className="m-0 py-2">
              Your city needs you — log in and take action
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="my-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control my-input"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="my-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control my-input"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="Main-btn mx-auto py-2">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <button className="btn">
                  <NavLink
                    to="/signup"
                    className="text-decoration-none color-1F2937"
                  >
                    {" "}
                    Sign up
                  </NavLink>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
