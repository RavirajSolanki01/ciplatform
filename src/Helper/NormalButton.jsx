import React from "react";
import "./helper.css";

export const NormalButton = ({
  name,
  btnClick,
  isArrow,
  isAdd,
  className,
  type,
}) => {
  return (
    <>
      <button
        data-testid="normal-btn"
        type={type}
        className={`${className ? className : "normal-btn"} normal-btn-common`}
        onClick={() => btnClick()}
      >
        {isAdd && (
          <img
            className="add-img"
            src={require("../Assets/signs/plus.svg").default}
            alt="arrow"
          />
        )}
        {name}
        {isArrow && (
          <img
            className="arrow-img"
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
