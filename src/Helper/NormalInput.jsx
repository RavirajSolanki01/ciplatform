import React from "react";
import "./helper.css";

export const NormalInput = ({ htmlfor, label, type, name }) => {
  return (
    <div className="normal">
      <label  htmlFor={htmlfor}>{label}</label>
      <input data-testid="normal-input" type={type} name={name} id={htmlfor} />
    </div>
  );
};
