import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    }); // async
    console.log(this.state.count); // previous value
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    }); // async
    console.log(this.state.count); // previous value
  };
  render() {
    console.log("render", this.state.count);
    return (
      <div>
        <h1>Class Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default ClassComponent;
