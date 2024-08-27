import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((data) => setData(data.data))
    //   .catch((error) => console.log(error));
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e) => {
    setSelectedData(e);
  };

  return (
    <>
      <h1>Performing Async Operation in react</h1>
      <h3>All data of 10 users</h3>
      <div className="flex">
        <div>
          <ul>
            {data.map((e) => (
              <li key={e.id} onClick={() => handleSelect(e)}>
                {e.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedData.id && (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedData.id}</td>
                  <td>{selectedData.name}</td>
                  <td>{selectedData.username}</td>
                  <td>{selectedData.email}</td>
                  <td>{selectedData.website}</td>
                  <td>{selectedData.phone}</td>
                  <td>
                    {selectedData.address.street}, {selectedData.address.suite},{" "}
                    {selectedData.address.city}
                  </td>
                  <td>{selectedData.company.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Axios;
