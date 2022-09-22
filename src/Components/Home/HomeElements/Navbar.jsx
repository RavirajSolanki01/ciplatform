import React from "react";
import { DropDown } from "../../../Helper";
import "./homelements.css";

export const Navbar = () => {
  const btnlist = [
    { name: "Item 1", link: "www.google.com" },
    { name: "Item 2", link: "www.google.com" },
    { name: "Item 3", link: "www.google.com" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-list">
        <div>
          <DropDown name="Explore" items={btnlist} />
        </div>
        <div>Stories</div>
        <div>
          <DropDown name="Policy" items={btnlist} />
        </div>
      </div>

      <div className="navbar-profile">
        <img
          className="profile-img"
          src={require("../../../Assets/signs/group-32.png")}
          alt="profile"
        />
        <div className="navbar-profile-drop-div">
          <DropDown name="Evan Donohue" items={btnlist} />
        </div>
      </div>
    </div>
  );
};
