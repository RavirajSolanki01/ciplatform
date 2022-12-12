import React, { useState } from "react";
import { useRef } from "react";
import "./helper.css";

export const NormalInput = ({
  htmlfor,
  label,
  type,
  name,
  className,
  inputType = "input",
  placeholder,
  isDisabled,
  value,
  onChange,
  posX,
  posY,
}) => {
  const ref = useRef();
  const [first, setfirst] = useState("blur");

  return (
    <div className={className ? `${className} normal` : "normal"}>
      <label htmlFor={htmlfor}>{label}</label>
      {inputType === "input" ? (
        <input
          className={
            type === "date" && first === "blur" ? "normal-date" : undefined
          }
          style={{
            background: isDisabled ? "#ebe7e7" : null,
            backgroundPositionX: posX,
            backgroundPositionY: posY,
          }}
          data-testid="normal-input"
          type={type === "date" ? "text" : type}
          name={name}
          value={value}
          disabled={isDisabled}
          id={htmlfor}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onFocus={
            type === "date"
              ? () => {
                  ref.current.type = "date";
                  setfirst("focus");
                }
              : undefined
          }
          onBlur={
            type === "date"
              ? () => {
                  setfirst("blur");
                  ref.current.type = "text";
                }
              : undefined
          }
        />
      ) : inputType === "textarea" ? (
        <textarea
        onChange={onChange}
        value={value}
          data-testid="normal-textarea"
          type={type}
          name={name}
          id={htmlfor}
          placeholder={placeholder}
        />
      ) : undefined}
    </div>
  );
};
