import React from "react";
import "./helper.css";

export const NormalButton = ({ name, btnClick }) => {
  return (
    <>
      <button
        data-testid="normal-btn"
        className="normal-btn"
        onClick={() => btnClick()}
      >
        {name}
      </button>
    </>
  );
};
