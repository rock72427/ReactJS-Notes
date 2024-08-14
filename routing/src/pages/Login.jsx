import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usn, setUsn] = useState("");
  const [pwd, setPwd] = useState("");
  const user = { usn: "abcdef", pwd: "123456" };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usn || !pwd) {
      alert("provide all fields before submit");
    } else if (usn.length < 6 || pwd.length < 6) {
      alert("provide correct inputs");
    } else {
      //   console.log(usn, pwd);
      if (usn == user.usn && pwd == user.pwd) {
        navigate("/");
      } else {
        alert("incorrect login details");
      }
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Username"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
