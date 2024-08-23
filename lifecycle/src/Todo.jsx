import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex == "") {
      let obj = {
        id: Math.trunc(Math.random() * 100000),
        task: input,
      };
      setTasks([...tasks, obj]);
      setInput("");
    } else {
      let newTasks = tasks.map((ele) => {
        if (ele.id == editIndex) {
          ele.task = input;
        }
        return ele;
      });
      setTasks(newTasks);
      setInput("");
    }
  };
  console.log(tasks);

  const editTask = (id) => {
    setEditIndex(id);
    let newTasks = tasks.find((ele) => ele.id == id);
    setInput(newTasks.task);
    console.log(editIndex);
  };
  const deleteTask = (id) => {
    let newTasks = tasks.filter((ele) => ele.id != id);
    setTasks(newTasks);
  };
  return (
    <>
      <div className="container-fluid bg-black">
        <form onSubmit={handleSubmit}>
          <div className="form-group d-flex p-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter you task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-success mx-2">
              {editIndex ? "UPDATE" : "ADD"}
            </button>
          </div>
        </form>
      </div>
      <div className="container-fluid p-4">
        {" "}
        <div className="tasks">
          <div className="row">
            {tasks.map((ele) => {
              return (
                <div key={ele.id} className="col-md-3">
                  <div className="card">
                    <div className="card-body">
                      <h1>{ele.task}</h1>
                      <button
                        onClick={() => deleteTask(ele.id)}
                        className="btn btn-dark"
                      >
                        DEL
                      </button>
                      <button
                        onClick={() => editTask(ele.id)}
                        className="btn btn-dark mx-2"
                      >
                        EDIT
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
