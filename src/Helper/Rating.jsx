import React from "react";

export const Rating = ({ stars, total, isEmpty }) => {
  var arr = [];

  for (let i = 0; i < total; i++) {
    if (i < stars) {
      arr.push("star");
    } else {
      arr.push("empty");
    }
  }

  return (
    <div className="rating-div" data-testid="rating-test">
      {arr.map((x, key) => {
        return x === "star" ? (
          <img
            key={key}
            src={require("../Assets/signs/selected-star.png")}
            alt="selected"
          />
        ) : isEmpty ? (
          <img
            key={key}
            className="empty-star"
            src={require("../Assets/signs/star-empty.png")}
            alt="star"
          />
        ) : (
          <img key={key} src={require("../Assets/signs/star.png")} alt="star" />
        );
      })}
    </div>
  );
};
