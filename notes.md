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
