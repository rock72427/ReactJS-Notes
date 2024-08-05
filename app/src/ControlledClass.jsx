import React, { Component } from "react";

class ControlledClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
    };
  }

  usernameHandle = (event) => {
    let value = event.target.value;
    if (value.length < 6) {
      this.setState({ usernameError: "Username is too short" });
    } else {
      this.setState({ usernameError: "" });
    }
    this.setState({ username: value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>ControlledClass</h1>
        <div className="container">
          <form className="form">
            <div className="input-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                id="username"
                onChange={this.usernameHandle}
                className="input-control"
              />
            </div>
            <span style={{ color: "red" }}>{this.state.usernameError}</span>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input
                className="input-control"
                type="password"
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="input-group">
              <button className="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
        <div className="container">
          <h1>Username: {this.state.username}</h1>
          <h1>Password: {this.state.password}</h1>
        </div>
      </div>
    );
  }
}

export default ControlledClass;
