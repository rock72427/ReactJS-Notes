import React, { useEffect, useState } from "react";

const Example2 = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Performing Async Operations in react</h1>
      <h2>All data of 10 users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {" "}
          {data.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.company.name}</td>
                <td>
                  {e.address.suite +
                    ", " +
                    e.address.street +
                    ", " +
                    e.address.city}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Example2;
