import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>Welcome to about page</h1>
      <div className="d-flex flex-column">
        <Link to="sub">Subscription</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="career">Career</Link>
      </div>
      <div className="m-5 p-3 bg-success text-white">
        <Outlet />
      </div>
    </>
  );
};

export default About;
