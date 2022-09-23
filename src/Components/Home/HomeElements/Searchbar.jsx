import React from "react";
import { dropdowndata } from "../../../Data/Data";
import { DropDown } from "../../../Helper/DropDown";
import "./homelements.css";

export const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search-div">
        <img
          src={require("../../../Assets/signs/search.svg").default}
          alt="Search"
        />
        <input
          className="searchbar-input"
          type="text"
          placeholder="Search mission..."
        />
      </div>

      <div className="searchbar-items">
        <DropDown name="Country" items={dropdowndata} />
      </div>
      <div className="searchbar-items">
        <DropDown name="City" items={dropdowndata} />
      </div>
      <div className="searchbar-items">
        <DropDown name="Theme" items={dropdowndata} />
      </div>
      <div className="searchbar-items">
        <DropDown name="Skills" items={dropdowndata} />
      </div>
    </div>
  );
};
