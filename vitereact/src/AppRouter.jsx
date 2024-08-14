import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../src/App";
import SignInPage from "./routes/SignIn";
import HeroSection from "./components/HeroSection";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HeroSection />} />
      <Route path="sign-in" element={<SignInPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
