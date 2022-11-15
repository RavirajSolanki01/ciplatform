import React from "react";
import "./helper.css";
export const DropDown = ({ name, items }) => {
  return (
    <div className="dropdown-div" data-testid="dropdown-test" >
      <select className="dropdown-select" name="dropdown" id="drop">
        <option value="default">{name}</option>
        {items.map((item) => (
          <option
            className="dropdown-option"
            key={item.name}
            value={item.value}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
