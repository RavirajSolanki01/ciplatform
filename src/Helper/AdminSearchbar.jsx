import React from "react";
import "./helper.css";

export const AdminSearchbar = () => {
  return (
    <div className="search-bar">
      <img src={require("../Assets/signs/search.svg").default} alt="" />
      <input type="text" name="searchbar" placeholder="Search" />
    </div>
  );
};
