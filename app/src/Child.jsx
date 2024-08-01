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
      {Object.keys(student).map((element) => {
        return (
          <h1>
            {element}: {student[element]}
          </h1>
        );
      })}
    </div>
  );
};

export default Child;
