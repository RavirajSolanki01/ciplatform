import React from "react";

export const Rating = ({ stars, total }) => {
  var arr = [];

  for (let i = 0; i < total; i++) {
    if (i < stars) {
      arr.push("star");
    } else {
      arr.push("empty");
    }
  }

  return (
    <div>
      {arr.map((x) => {
        return x === "star" ? (
          <img
            src={require("../Assets/signs/selected-star.png")}
            alt="selected"
          />
        ) : (
          <img src={require("../Assets/signs/star.png")} alt="star" />
        );
      })}
    </div>
  );
};
