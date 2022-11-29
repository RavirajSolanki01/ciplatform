import React from "react";
import { Header } from "./Header/Header";
import { Navigation } from "./Navigation/Navigation";
import "./admin.css"

export const Admin = () => {
  return (
    <div>
      <div className="admin">
        <Navigation />
        <Header />
      </div>
    </div>
  );
};
