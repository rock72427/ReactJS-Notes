import React from "react";

class Third extends React.Component {
  constructor() {
    super();
    this.msg = "It's a class component";
  }
  render() {
    return (
      <div>
        <h1>{this.msg}</h1>
      </div>
    );
  }
}

export default Third;
