import React from "react";

export const NormalSelect = ({
  htmlfor,
  label,
  name,
  items,
  placeholder,
  className,
}) => {
  return (
    <div className={className ? `${className} normal-select` : "normal-select"}>
      <label htmlFor={htmlfor}>{label}</label>
      <select name={name || "form-select"} id={htmlfor}>
        <option value="default">{placeholder}</option>
        {items.map((item) => (
          <option
            className="form-select-option"
            key={item.name}
            value={item.value}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
