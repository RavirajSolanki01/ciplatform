import React from "react";

export const BorderButton = ({ logo, name, className,btnClick }) => {
  return (
    <div className={className ? className : "border-btn"}>
      <button className="border-inner" onClick={btnClick} >
        {logo === "heart" ? (
          <img src={require("../Assets/signs/heart1.png")} alt="heart" />
        ) : logo === "co-worker" ? (
          <img src={require("../Assets/signs/add1.png")} alt="heart" />
        ) : undefined}
        {name}
      </button>
    </div>
  );
};
