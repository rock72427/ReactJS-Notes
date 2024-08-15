import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const addTask = () => {
    if (!input.trim()) {
      alert("Write your task before adding");
    } else {
      if (!editId) {
        let obj = {
          task: input,
          id: Math.trunc(Math.random() * 100000),
        };
        setTasks([...tasks, obj]);
        setInput("");
      } else {
        let newTasks = tasks.map((ele) => {
          if (ele.id == editId) {
            ele.task = input;
          }
          return ele;
        });
        setTasks(newTasks);
        setInput("");
        setEditId(null);
      }
    }
  };
  const deleteTask = (id) => {
    let newTasks = tasks.filter((ele) => ele.id != id);
    setTasks(newTasks);
  };
  const editTask = (id) => {
    setEditId(id);
    let editTask = tasks.find((ele) => ele.id == id);
    setInput(editTask.task);
  };
  return (
    <>
      <div className="inputs">
        <input
          type="text"
          placeholder="Write your task here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>{editId ? "UPDATE" : "ADD"}</button>
      </div>
      <div className="tasks">
        {tasks.map((e) => {
          return (
            <div key={e.id} className="task">
              <h4>{e.task}</h4>
              <div className="buttons">
                <button id="del" onClick={() => deleteTask(e.id)}>
                  DEL
                </button>
                <button id="edit" onClick={() => editTask(e.id)}>
                  EDIT
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
