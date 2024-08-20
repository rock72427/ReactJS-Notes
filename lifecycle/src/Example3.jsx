import React, { useEffect, useState } from "react";

const data = [
  {
    name: "India",
    cities: ["Mumbai", "Delhi", "Bengaluru", "Bhubaneswar"],
  },
  {
    name: "USA",
    cities: ["Texas", "NewYork", "California", "Miami"],
  },
  {
    name: "UK",
    cities: ["London", "Lords", "Oval", "Bermingham"],
  },
  {
    name: "China",
    cities: ["Beijing", "Wuhan", "Honkkong", "Sanghai"],
  },
];

function Example3() {
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  useEffect(() => {
    if (country) {
      let countryData = data.find((ele) => ele.name == country);
      setCities(countryData.cities);
      setCity("");
    } else {
      setCity("");
      setCities([]);
    }
  }, [country]);
  return (
    <>
      <div>
        <label htmlFor="contry">Select Country :</label>
        <select
          name="country"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        >
          <option value="">Select Your Country.....</option>
          {data.map((e) => {
            return <option value={e.name}>{e.name}</option>;
          })}
        </select>
      </div>
      {country && (
        <div>
          <label htmlFor="city">Select Your City :</label>
          <select
            name="city"
            id="city"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select Your City......</option>
            {cities.map((ele) => {
              return <option value={ele}>{ele}</option>;
            })}
          </select>
        </div>
      )}
      {country && city && (
        <div>
          <h1>
            Welcome to {city},{country}
          </h1>
        </div>
      )}
    </>
  );
}

export default Example3;
