import React from "react";
import "./helper.css";

export const NormalButton = ({ name, btnClick, isArrow, className, type }) => {
  return (
    <>
      <button
        data-testid="normal-btn"
        type={type}
        className={`${className ? className : "normal-btn"} normal-btn-common`}
        onClick={() => btnClick()}
      >
        {name}
        {isArrow && (
          <img
            src={require(`../Assets/signs/${
              isArrow === "white" ? "arrow-white" : "right-arrow"
            }.png`)}
            alt="arrow"
          />
        )}
      </button>
    </>
  );
};
