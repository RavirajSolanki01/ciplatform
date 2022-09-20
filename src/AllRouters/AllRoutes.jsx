import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login/Login";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
