import React from "react";

export const Progressbar = ({ percent, total }) => {
  return (
    <div className="progressbar">
      <div
        className="filled"
        style={{ width: `${(percent * 100) / total}%` }}
      ></div>
    </div>
  );
};
