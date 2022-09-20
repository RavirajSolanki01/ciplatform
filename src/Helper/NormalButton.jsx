import React from "react";
import "./helper.css";

export const NormalButton = ({ name }) => {
  return (
    <>
      <button data-testid="normal-btn" className="normal-btn">
        {name}
      </button>
    </>
  );
};
