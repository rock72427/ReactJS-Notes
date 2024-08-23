import React, { useState } from "react";

const InputGenerator = () => {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [inputs, setInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      lbl: label,
      tye: type,
    };
    setInputs((prevInputs) => [...prevInputs, obj]);
    setLabel("");
    setType("");
  };

  const handleSelectChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <div className="container" style={{ width: "40%" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Label"
              className="form-control"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
            <select
              class="form-select"
              value={type}
              onChange={handleSelectChange}
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
              <option value="date">Date</option>
              <option value="color">Color</option>
              <option value="file">File</option>
              <option value="range">Range</option>
              <option value="submit">Submit</option>
            </select>
            <button className="btn btn-dark">Submit</button>
          </div>
        </form>
        <div className="pt-3">
          {inputs.map((input, index) => (
            <div key={index}>
              <label htmlFor="">{input.lbl}</label>
              <input className="form-control" type={input.tye} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputGenerator;
