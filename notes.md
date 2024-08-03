# React

- React is a open source javascript library use to create user interfaces (UI).

- React create single page applications which provide the users better user experience (UX).
- React works with reuseable components.
- React library consist of various methods and properties which helps us to create a website more faster.

Pre requisite to leran react:

- Basic knowledge about HTML tag and CSS properties.
- Basic knowledge about Javascript functions, objects and arrays.
- Knowledge about ES6 features like rest operator, spread operator, de-structuring, arrow function, modules, classes and promises.
- A javascript runtime environment for example:- nodejs with knowledge of npm and npx.

## Features of ReactJS

1. Single Page Application (SPA)
2. Reusable Components
3. Fast Performance (Virtual DOM)
4. Scalability (can redude large Apps)
5. Testability (easy to test)
6. Native Approach (creates mobile applications)
7. Data binding (easy to manupulate data)
8. Big Community (large no. of Developers worldwide)
9. Easy to learn

## History of ReactJS

- ReactJS was developed by Jordan Walke, a software engineer working for Facebook. In 2011
- The fast implementation of react was in the facebook news feeds in the year of 2011, later in 2012 they implement the react in instagram.
- In 2013 JS conference US react become open-source.
- The current version ongoing version of react is 18.3V.
- The biggest update of react introduced in 16.8V which allowed the developer to use more functional oriented components.
- In 16.8V hooks concept introduced.

## NodeJS

- NodeJS is a software environment which allows us to run the javascript code outside of the web browser.

## NPM (node package manager)

- NPM stands for node package manager.
- It is a software registery which store all the javascript libray and packages.
- It is a online storage platform with more then 2 million of javascript packages.

#### To install

```
npm install <packageName>
npm i <packageName>
```

#### To uninstall

```
npm uninstall <packageName>
```

## NPX

- NPX stands for node package execute.
- NPX is a command use to execute javascript packages without installing them.

```
npx <packageName>
```

## Creating a React Application

1. using create-react-app (CRA)

- install nodejs
- install react globally in the system
  > npm i -g react

### Steps

1. npx create-react-app projectname
2. Move to the Project Folder
   > cd projectname
3. Run the Application
   > npm start

## Folder Structure of a React Application

### 1. node_modules

- node_modules folder stores all the third party libraries and packages which are use inside the react application.

### 2. public

- public folder stores all the static files of the application.
- Inside public folder index.html file is presented which is the main html file of the react application.
- This is the only page which will load inside browser (this is known as single page).

### 3. src

- src is the folder where the developer's are going to write source code of the react application.
- Inside src index.js file is presented which is the root javascript file and app.js which is the root react file of the react application.

### 4. .gitignore

- This file is use to prevent pushing unwanted files to the github.

### 5. package.json

- This file store the information about the project and its dependencies packages.
- This file also store the scripting commands to run, build, test the application.

### 6. package-lock.json

- This file stores depth information about all the dependencies packages installed in our application.

## Libraries used inside a React Application

### 2. react-dom

- react-dom library manages every dom manupulation inside the react app.
- Before sending the DOM changes to browser react DOM library verify it which is known as virtual DOM.

### 3. react-scripts

- This library provide the commands to start, build and test the application.

### \*4. eslint

- eslint library is use the handle the errors inside the application and maintains the code standard.

### \*5. webpack

- Webpack is a moudle bundler library its main purpose is to bundle all the javascript files into a single file before given to the browser.

### \*6. Babel

- Babel is a javascript compiler library which use to convert the modern javascript code into browser understanding code.
- This is the library which is helping us to write jsx syntax inside a react component.

### 7. webvitals

- This library use to measure the performace of an application.

### 8. jest

- This library is use for unit testing purpose of the react application.

## JSX

- JSX is stands for javascript extention or javascript XML.
- JSX allows the developer's to write HTML like syntax in a React component.
- JSX is not mandatory but it is the easiest way to embbed HTML elements in React application.

### Rules of JSX

- All the components inside JSX should starts with upper case.
- If a components is returning multiple JSX elements we should wrap them inside a single parent element.

```
function App() {
   return (
      <div>
         <h1>This is app compoenent</h1>
         <First></First>
         <b>Component Ends</b>
      </div>
   )
}
```

- Every tags are paired tags or closing tags inside JSX.

```
const First = () => {
   let msg = "Hello World";
   return (
      <div>
         <h1>This is first component</h1>
      ❌<br>
      ✅<br />
      ✅<br></br>

         {100 + 100}
         <h1>{msg}</h1>
         {console.log("hi from jsx")}

      ❌{for (let i = 0; i <= 5; i++) {
               console.log(i);
         }}

      ❌{if(10 > 5) {
            <h1>10 is greater</h1>
         }}

      ✅{10 > 5 ? <h1>10 is greater</h1>: <h1>10 is smaller</h1>}
      </div>
   )
}
```

- We can write javascript inside JSX using curly braces.
- We cannot write any types of looping statements inside JSX.
- We cannot write any conditional statements inside JSX, for conditions we can use ternary operator's.
- We can write JSX inside the conditional statements or looping statements.

```
const First = () => {
   if (10 > 5) {
      return <h1>{10} is greater</h1>
   } else {
      return <h1>{5 + 5} is smaller</h1>
   }
}
```

- Attributes like class changes to className and for changes to htmlFor.

```
const First = () => {
   return (
      <div>
         <h1 className="heading">Hello</h1>
         <label htmlFor="username">Username:</label>
         <input type="text" id="username" />
      </div>
   )
}
```

- Every event's inside JSX are synthetic event's (inline event's) and convert to camel cases

```
onclick => onClick
onchange => onChange
onsubmit => onSubmit
onkeypress => onKeyPress
```

```
const First = () => {
   function buttonClick() {
      console.log("Button Clicked")
   }
   return (
      <div>
         <h1>EVENTS</h1>
         <button onClick={buttonClick}>Click Here</button>
      </div>
   )
}
```

## Components

- Components are basic building block's of an react application.
- Components are similar to javascript function or classes which returns some DOM elements or JSX elements.
- Components are independent and can be reuse multiple times.
- There are 2 types of component in react application:

1. Function Based Components
2. Class Based Components

### Function Based Components

- The components which are created by using javascript function creation method are known as function based components.

```
function First() {
   return (
      <div>
         <h1>This is First Components</h1>
      </div>
   )
}
export default First
```

### Class Based Components

- The components which are created by using javascript class syntax are known as class based components.
- Every class components should inherit the properties and methods from a parent class React.Component.
- All the class based components are attached with inbuild method and functionalities.
- To return some JSX from a class based components we have to use render method.

```
import React from 'react'

class Third extends React.Component {
   constructor() {
      super()
      this.msg = "It's a class component"
   }
   render() {
      return (
         <div>
            <h1>{this.msg}</h1>
         </div>
      )
   }
}

export default Third
```

## Props (properties)

- Props is an inbuild object inside react components.
- Props are the data which send from a parent component to child component.
- Props are send in a similar way like function arguments (or) HTML attributes
- Props are immutable as they are the data recieved from parent component.
- Props are passed as a key-value pair.

#### Example

```
<Component key={value} />
```

## Props in a Class Based Component

#### App.js

```
import React from "react";
import Third from "./Third";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <Third name="Rocky" age={25} msg={msg} />
    </div>
  );
};

export default App;
```

#### Third.js

```
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
```

## Props in a Function Based Component

#### App.js

```
import React from "react";
import First from "./First";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <First name={"Virat"} address={"Delhi"} age={35} />
    </div>
  );
};

export default App;
```

#### First.js

```
import React from "react";

const First = (props) => {
  console.log(props);
  const { name, address, age } = props;
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>Name = {name}</h1>
      <h1>Address = {address}</h1>
      <h1>Age = {age}</h1>
    </div>
  );
};

export default First;
```

## OR

#### First.js

```
import React from "react";

const First = ({ name, address, age }) => {
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>Name = {name}</h1>
      <h1>Address = {address}</h1>
      <h1>Age = {age}</h1>
    </div>
  );
};

export default First;
```

## Children Props

- The data (or) information which passed in between the component opening and closing tags is called as children props.
- That data implicitly added to a properly named as children inside the props object.

#### Example

```
<Component>
   {data}
</Component>
```

#### App.js

```
import React from "react";
import First from "./First";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <First>
        {"Hello Jspider"} <br />
        {"Welcome to the React Class"}
      </First>
    </div>
  );
};

export default App;
```

#### First.js

```
import React from "react";

const First = ({ children }) => {
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>{children}</h1>
    </div>
  );
};

export default First;
```

## Q. Difference between library and framework?

### Library

- A library is a collection of reusable code that provides a specific functionality or set of functionalities.
- Libraries are typically used to perform a specific task, such as data encryption, compression, or networking.
- When using a library, the developer is in control of the application's flow and decides when to call the library's functions.

### Framework

- A framework, on the other hand, is a more comprehensive structure that provides a set of pre-defined components, tools, and rules to build an application.
- Frameworks often dictate the application's architecture and provide a set of guidelines for development. When using a framework, the developer must adhere to its rules and guidelines to build the application.

### Key differences

Here are the key differences between libraries and frameworks:

#### Control:

- When using a library, the developer is in control of the application's flow.
- When using a framework, the framework dictates the application's architecture and flow.

#### Scope:

- Libraries are typically used to perform a specific task, while frameworks provide a comprehensive structure for building an application.

#### Customization:

- Libraries can be easily customized to fit the developer's needs, while frameworks often require more effort to customize.

## Props Drilling

![props drilling](https://i.ibb.co/1ryK8Kj/2024-07-31-16-31-20-AI-Eraser.png)

- Sending the data from top most parent component to least most child component as a props known as props drilling.

### Advantage

- If every connected component need same data then we can create the data in top most parent component and pass that one as a props to each connected children component.

### Disadvantage

- If any one of the component does not need that data still it have to recive and pass the data to its child component as a props.
- If any changes made in the parent data every connected child components will re-render in the web page this process can decrease the performance of react aplication.

## One Way Data Binding

- a react application followsthe architecture of one way data binding that means we can only send the data from a parent component to child component.
- There is no predefined method or properties by which we can send the data
  from child component to parent component, but we can use our own custom methods as a callback function through which we can send data from child to parent component.

#### App.js

```
import Child from "./Child";

function App() {
  const getAddress = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child name="Rinku Singh" getAddress={getAddress} />
    </div>
  );
}

export default App;
```

#### Child.js

```
import React from "react";

function Child({ name, getAddress }) {
  let address = "UP";
  function handleClick() {
    getAddress(address);
  }
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>Send Data</button>
      <b>{name}</b>
    </div>
  );
}

export default Child;
```

#### Inline css in ReactJS

```
import React from "react";

const Child = () => {
  let myStyle = {
    color: "red",
    backgroundColor: "#000",
    fontSize: "30px",
    padding: "20px 30px",
    border: "1px solid #fff",
    margin: "0px",
  };
  return (
    <>
      <h1
        style={{
          color: "red",
          backgroundColor: "#000",
          fontSize: "30px",
          padding: "20px 30px",
          border: "1px solid #fff",
          margin: "0px",
        }}
      >
        Heading
      </h1>
      <p style={myStyle}>Section</p>
    </>
  );
};

export default Child;
```

#### External css in ReactJS

#### App.js

```
import React from "react";
import "./App.css";
import Child from "./Child";

const App = () => {
  return (
    <div>
      <Child />
    </div>
  );
};

export default App;
```

#### App.css

```
* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  width: 80%;
  margin: auto;
}
#heading {
  background: coral;
  color: #fff;
  padding: 10px 0px;
}
.section {
  line-height: 35px;
}
```

#### Child.jsx

```
import React from "react";

const Child = () => {
  return (
    <>
      <h1 id="heading">
        <div className="container">Heading</div>
      </h1>
      <div className="container">
        <p className="section">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          voluptatum iure commodi ratione architecto! Dignissimos reiciendis quo
          sit dolorum alias illum officiis atque, quia quod rem distinctio eum,
          dolores optio. Cum molestiae voluptate quos non vero, laborum et
          debitis necessitatibus alias possimus expedita aut? Ut ipsa quisquam
          vitae eum culpa sequi explicabo tenetur, dolorem optio consequuntur
          placeat architecto excepturi odio. Nihil, itaque ut ipsam ducimus
          consectetur mollitia. Ipsum impedit consequuntur vel quod temporibus
          natus, reiciendis cum non quidem, nihil illo ad exercitationem magni
          nemo ipsa aperiam nam. Quo, impedit explicabo? Doloribus ut temporibus
          deserunt? Praesentium eligendi reprehenderit aliquam veritatis
          explicabo ipsa quidem dolorum mollitia sapiente delectus ab magnam
          sint, officiis suscipit architecto illum tempore corrupti repellendus
          illo ex labore. Consequatur.
        </p>
      </div>
    </>
  );
};

export default Child;
```

```
import React from "react";
import Image from "./img.jpg";

const Child = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src="https://assets.promptbase.com/DALLE_IMAGES%2FQyoCIEAadSVXpsO0KGYsgzKu4lp2%2Fresized%2F1688409888663_w_800x800.webp?alt=media&token=e18085c6-e963-4145-9c60-7d398e7cadea"
          alt="Image"
          height={"737px"}
        />
        <img src={Image} alt="Image" height={"737px"} />
        {/* <img src="/img.jpg" alt="Image" height={"737px"} /> */}
      </div>
    </>
  );
};

export default Child;
```

#### Iterating an array

```
import React from "react";

const Child = () => {
  let fruits = ["mango", "grapes", "apple", "banana", "orange"];
  let displayFruits = [];
  for (let fruit of fruits) {
    displayFruits.push(<li>{fruit}</li>);
  }
  return (
    <div>
      <ol>
        {fruits.map((fruit, index) => {
          return <li>{fruit}</li>;
        })}
      </ol>
      {displayFruits}
    </div>
  );
};

export default Child;
```

#### Iterating an object

```
import React from "react";

const Child = () => {
  let student = {
    name: "Rocky",
    age: 24,
    address: "KGF",
    email: "rockybhai@gmail.com",
  };
  let displayStudent = [];
  for (let key in student) {
    displayStudent.push(
      <h1>
        {key}: {student[key]}
      </h1>
    );
  }

  return (
    <div>
      {displayStudent}
      ---------------------
      {/* {console.log(Object.keys(student))} */}
      {/* {console.log(Object.values(student))} */}
      {Object.keys(student).map((key) => {
        return (
          <h1>
            {key}: {student[key]}
          </h1>
        );
      })}
    </div>
  );
};

export default Child;
```

## State

- State is an in-built property in react component(class based component).
- State is component own data.
- State is mutable.
- State is use to perform any dynamic changes inside a component to manage the DOM manupulation in a react application.
- Any updation in state value re-render the component.
- State manages the life cycle of a component from creating to destroying.

### State in a Class Based Component

- State is an in-build property inside class based component that's why they are known as statefull component.
- to create a state value we have to use `this.state` property inside the constructor function.

#### Example

```
this.state = {count: 0}
```

- To modify the state value we are using an in-build method `this.setState()`.

### State in a Function Based Component

- State is not an in-build property in function based component that's why those are known as stateless component.
- To use a state inside function component we have to depend on a `hook` named as `useState()`.
  > ### Note
  >
  > > ### Hook
  > >
  > > Hooks are nothing but some predefined methods introduced in React 16.8 version to achive the in-build features in funciton based component.

#### Syntax

```
const [state, setState] = useState(initialValue)
// setState => function to update the state
```

#### Example

```
const [count, setCount] = useState(0);
```

#### App.js

```
import React from "react";
import FunctionComponent from "./Function";
import ClassComponent from "./Class";

const App = () => {
  return (
    <div>
      <FunctionComponent />
      <ClassComponent />
    </div>
  );
};

export default App;
```

#### Function.js

```
import { useState } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Function Component</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default FunctionComponent;
```

#### Class.js

```
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

```

# Interview Question

## Q1. What is the difference between state and props?

- In React, props and state are essential concepts for manageing data an passing information between components.
- Understanding the differences and use cases for each is curcial for building robust and maintainable applications.

### Props(Properties)

- `Definition`: Props are read-only data that are passed from a parent component to a child component. They allow components to be customizable and reusable.
- `Usage`: Props are used to transmit data from a parent component to a child component.
- `Passing Props`: Props are passed as attributes to a component in JSX.
- `Accessing Props`: Inside the child component, props are accessed via the `props` object.

### State

- `Definition`: State represents the internal data of a component that can change over time. It allows components to manage thier own data.
- `Usage`: State is used for data that can change within a component and triggers re-rendering when updated.
- `Initializaing State`: State is initialized using the `useState` hook.

- `Updating State`: State should never be modified directly. Instead, use the setter function provided by the hook to update state.

### Props vs State

#### Props:

- Immutable (read-only).
- Passed from parent or child.
- Used for configuring child components.

#### State:

- Mutable (can be updated).
- Managed within a component.
- Used for managing internal component data.

## Q2. Difference between Classbased component and Functionbased component?

### Functional

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- A functional component is just a plain Javascript pure function that accepts props as an argument and returns a React element.
- There is no render method used in functional components.
- Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI.

```
const [name, setName] = React.useState(' ');
```

- Hooks can be easily used in functional components to make them stateful.
- Functional components are simpler and faster.

### Class Component

```
class DemoComponent extends React.Component {
  render() {
    return <h1>Welcome Message!</h1>;
  }
}
```

- A class component require you to extend from React.Component and create a render function that returns a React element.
- It must have the render method returning JSX.

```
class Welcome extends React.Component {
  // this is a statefull component
  constructor(props) {
    super(props);
    this.state = {name: 'John Doe'};
  }
  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}
```

- Also known as Stateful components because they implement logic ans state.

```
constructor(props) {
  super(props);
  this.state = {name: ' '}
}
```

- It require different syntax inside a class component to implement hooks.
- Class components are more feature-rich and reusable.

## Q3. Difference between controlled component and uncontrolled component?

| Controlled component                                                   | Uncontrolled component                                                                                                                             |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| The parent component has held over the form data.                      | The DOM itself holds control over the data.                                                                                                        |
| It does not maintain its internal state.                               | It maintains its internal state.                                                                                                                   |
| It allows validation control.                                          | It does not allow validation control.                                                                                                              |
| It stores the current value in the form of props.                      | It stores the current value using react ref.                                                                                                       |
| It has better control over the form data.                              | It has limited control over the form data.                                                                                                         |
| Predictable because the component handles the form data at every step. | Not predictable because form elements can lose their reference or may be changed/ affected by external sources during the lifecycle of components. |

## Q4. What is hooks in react and what are the rule of using a hook?

- Hooks are the new feature introduced in the React 16.8 version.
- It allows you to use state and other React features without writing a class.
- Hooks are the functions which "hook into" React state and lifecycle features from function components.
- It does not work inside classes.

- There are 3 rules for hooks

### 1. Only use hooks at the top level

- This means don't use hooks inside loops, conditions or nested functions they should always be called at the top lever of your functional components.
  ![](https://i.ibb.co/HGxqS4D/2024-08-03-15-00-05-frontend-devlopment-React-interview-question-number-5-Is-it-useful-Let-me.png)

### 2. Only call hooks from React functions.

- Hooks should only be called from react functional components or custom hooks don't call them from regular Javascript functions.

```
export default function useMyName(name) {
  const [state, setState] = useState(value);

  useEffect(() => {
    // ...
  });

  return anyThing;
}
```

3. Don't call hooks conditionall.

- Hooks should always be called unconditionally at the top level of your component don't call them inside conditions because react relies on the order of hooks to properly manage state.\
  ![](https://i.ibb.co/3zTCDGT/2024-08-03-15-08-17-React-interview-question-number-5-Is-it-useful-Let-me-know-in-comments-Follow.png)
