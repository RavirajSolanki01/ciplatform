import React from "react";
import "./helper.css";

export const NormalInput = ({
  htmlfor,
  label,
  type,
  name,
  className,
  inputType = "input",
  placeholder,
}) => {
  return (
    <div className={className ? `${className} normal` : "normal"}>
      <label htmlFor={htmlfor}>{label}</label>
      {inputType === "input" ? (
        <input
          data-testid="normal-input"
          type={type}
          name={name}
          id={htmlfor}
          placeholder={placeholder}
        />
      ) : inputType === "textarea" ? (
        <textarea
          data-testid="normal-input"
          type={type}
          name={name}
          id={htmlfor}
          placeholder={placeholder}
        />
      ) : undefined}
    </div>
  );
};
