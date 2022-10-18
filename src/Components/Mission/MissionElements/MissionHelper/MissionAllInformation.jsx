import React from "react";
import { missionInfo } from "../../../../Data/Data";
import "./missionhelper.css";

export const MissionAllInformation = () => {
  return (
    <div className="mission-all-info">
      <div>
        <p className="mission-points-title">
          {Object.keys(missionInfo.mission[0])}
        </p>
        {Object.values(missionInfo.mission[0])[0].map((point, key) => {
          return (
            <p className="mission-info-para" key={key}>
              {point}
            </p>
          );
        })}
      </div>
      <div>
        <p className="mission-points-title">
          {Object.keys(missionInfo.mission[1])}
        </p>
        {Object.values(missionInfo.mission[1])[0].map((point, key) => (
          <p className="mission-info-para" key={key}>
            {point}
          </p>
        ))}
      </div>
      <div>
        <p className="mission-points-title">
          {Object.keys(missionInfo.mission[2])}
        </p>
        <div>
          {Object.values(missionInfo.mission[2])[0].map((point, key) => (
            <button className="mission-info-btn" key={key}>
              {point.endsWith("pdf") ? (
                <img src={require("../../../../Assets/signs/pdf.png")} alt="" />
              ) : point.endsWith("doc") ? (
                <img src={require("../../../../Assets/signs/doc.png")} alt="" />
              ) : (
                <img
                  src={require("../../../../Assets/signs/xlsx.png")}
                  alt=""
                />
              )}
              {point}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
