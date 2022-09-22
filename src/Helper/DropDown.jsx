import React, { useState } from "react";
import "./helper.css";

export const DropDown = ({ name, items }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dropdown-div">
      <button onClick={() => setToggle(!toggle)} className="dropdown-btn">
        {name || "Dropdown"}
        <img
          className="dropdown-icon-img"
          src={require("../Assets/signs/admin-arrow.png")}
          alt="arrow"
        />
      </button>
      {toggle ? (
        <div className="dropdown-items">
          {items.map((item, key) => (
            <button key={key}>{item.name}</button>
          ))}
        </div>
      ) : null}
    </div>
  );
};
