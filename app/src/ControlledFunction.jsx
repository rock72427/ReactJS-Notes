import React, { useState } from "react";

const ControlledFunction = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  function usernameHandle(event) {
    let value = event.target.value;
    console.log(value);
    if (value.length < 6) {
      setUsernameError("is too short");
    } else {
      setUsernameError("");
    }
    setUsername(value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields");
    } else if (usernameError) {
      alert("provide correct input");
    } else {
      console.log(username, password);
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div>
      <h1>ControlledFunction</h1>
      <div className="container w-50">
        <form className="form" onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="">
              Username <span style={{ color: "red" }}>{usernameError}</span>
            </label>
            <input
              type="text"
              id="username"
              onChange={usernameHandle}
              className="input-control"
              value={username}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="input-control"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="input-group">
            <button className="btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
      <div className="container w-50">
        <h1>Username: {username}</h1> <h1>Password: {password}</h1>
      </div>
    </div>
  );
};

export default ControlledFunction;
