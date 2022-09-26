import React from "react";
import "./helper.css";

export const NormalButton = ({ name, btnClick, isArrow, className }) => {
  return (
    <>
      <button
        data-testid="normal-btn"
        // className={`${className}?${className}: "normal-btn" `}
        className={`${className ? className : "normal-btn"}`}
        onClick={() => btnClick()}
      >
        {name}
        {isArrow && (
          <img src={require("../Assets/signs/right-arrow.png")} alt="arrow" />
        )}
      </button>
    </>
  );
};
