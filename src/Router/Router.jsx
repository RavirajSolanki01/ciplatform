import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login/Login";
import { Mission } from "../Components/Mission/Mission";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/mission" element={<Mission />} />
      </Routes>
    </div>
  );
};
