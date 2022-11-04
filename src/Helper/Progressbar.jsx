import React from "react";

export const Progressbar = ({ percent, total }) => {
  return (
    <div className="progressbar" data-testid="progressbar-test" >
      <div
        className="filled"
        style={{ width: `${(percent * 100) / total}%` }}
      ></div>
    </div>
  );
};
