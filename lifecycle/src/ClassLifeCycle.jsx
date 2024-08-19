import React, { Component } from "react";

export class ClassLifeCycle extends Component {
  constructor() {
    // this is the first method of mounting phase which initialize the variable and state
    super();
    this.state = { count: 0, color: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    // this is the second method of mounting phase and it returns state value from the props data
    // this method is also the first method of updating phase which everytime updates the state value
    // with props data after every state or props updation
    console.log("this is getDerivedStateFromProps()");
    return { color: props.color };
  }
  componentDidMount() {
    // this is the last method of mounting phase
    // it executes once after the initial render of the components
    // this method used for the side effects like data fetching and asynchronous
    console.log("this is componentDidMount()");
  }
  shouldComponentUpdate() {
    // this is the second method of updation phase which defines the component will re-render or not
    // it returns boolean value the default return type is true
    console.log("this is shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // this method is used to get the values of previous props and state data
    // using those we can perform any operation in the component
    // this method should be used along with componentDidUpddate() method
    console.log("this is getSnapshotBeforeUpdate()");
    // console.log(prevState, prevProps);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // to perform any side effects for the component after updation of state or props data
    // this method is the last method of updation phase, it executes after component re-render
    console.log("this is componentDidUpdate()");
    // console.log(prevState, prevProps, snapshot);
    // if (this.state.count == 5) {
    //   alert("count become 5");
    // }
  }
  componentWillUnmount() {
    // this method executes when the component is going to be remove from the DOM
    // this is used for the clean-up functionality of the state or props values of the component
    console.log("this is componentWillUnmount()");
  }
  render() {
    // this is the third method of mounting method executes ater the derived method
    // the 3rd method of updation phase after shouldComponentUpdate() method
    console.log("this is render()");
    return (
      <>
        <h1 style={{ color: this.state.color }}>Class Life Cycle Methods</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Change Count
        </button>
        <h2>{this.props.color}</h2>
        <button onClick={() => this.setState({ color: "blue" })}>
          Change Color
        </button>
      </>
    );
  }
}

export default ClassLifeCycle;
