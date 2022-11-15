import React from "react";
import { useState, useRef } from "react";

export const UploadInput = ({
  htmlfor,
  label,
  name,
  className,
  placeholder,
  instruction,
}) => {
  const ref = useRef();
  const [file, setFile] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    ref.current.click();
    if (e.target.files && e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className={className ? className : "upload-input"} data-testid="upload-input" >
      <label htmlFor={htmlfor}>{label}</label>
      <button onClick={handleClick} id={htmlfor}>
        {file ? (
          <img className="preview-img" src={file} />
        ) : (
          <img src={require("../Assets/signs/upload.png")} alt="upload" />
        )}
        {file ? undefined : placeholder}
      </button>
      <input
        style={{ display: "none" }}
        type="file"
        name={name}
        ref={ref}
        onChange={(e) => handleClick(e)}
      />
      {instruction && <span>{instruction}</span>}
    </div>
  );
};
