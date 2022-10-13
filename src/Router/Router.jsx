import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Mission, PrivacyPolicy } from "../Components";

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
