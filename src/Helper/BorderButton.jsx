import React from "react";

export const BorderButton = ({ logo,name }) => {
  return (
    <div>
      <button>
        <img src={require("../Assets/signs/heart.svg").default} alt="heart" />
        {name}
      </button>
    </div>
  );
};
