import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Mission from "../Components/Mission";
import PrivacyPolicy from "../Components/Privacy";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/mission" element={<Mission />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};
