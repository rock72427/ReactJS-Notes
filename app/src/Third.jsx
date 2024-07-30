import React from "react";

class Third extends React.Component {
  constructor() {
    super();
    this.msg = "It's a class component";
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Name = {this.props.name}</h1>
        <h1>Age = {this.props.age}</h1>
        <h1>Msg = {this.props.msg}</h1>
      </div>
    );
  }
}

export default Third;
