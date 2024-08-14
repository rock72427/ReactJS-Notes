import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Subscription from "./pages/Subscription";
import NotFound from "./NotFound";
import Blog from "./pages/Blogs";
import Career from "./pages/Career";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="sub" element={<Subscription />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="career" element={<Career />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
