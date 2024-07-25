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
