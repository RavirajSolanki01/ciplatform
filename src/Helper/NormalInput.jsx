import React from "react";
import "./helper.css";

export const NormalInput = ({ htmlfor, label, type, name }) => {
  return (
    <div className="normal" data-testid="normal-input">
      <label  htmlFor={htmlfor}>{label}</label>
      <input type={type} name={name} id={htmlfor} />
    </div>
  );
};
