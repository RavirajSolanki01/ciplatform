import React from "react";

export const InfoBox = ({ img, keyName, valueName }) => {
  return (
    <div className="info-class" data-testid="infobox-div" >
      <div>
        <img src={require(`../Assets/keyimg/${img}.png`)} alt="location" />
      </div>
      <div>
        <span>{keyName}</span>
        <span>{valueName}</span>
      </div>
    </div>
  );
};
