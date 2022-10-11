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
    <>
      {arr.map((x, key) => {
        return x === "star" ? (
          <img
            key={key}
            src={require("../Assets/signs/selected-star.png")}
            alt="selected"
          />
        ) : (
          <img key={key} src={require("../Assets/signs/star.png")} alt="star" />
        );
      })}
    </>
  );
};
