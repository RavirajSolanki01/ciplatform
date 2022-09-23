import React from "react";
import { listData } from "../../../Data/Data";
import "./homelements.css";

export const MissionListing = () => {
  return (
    <div className="mission-listing-main">
      {listData.map(() => {
        return (
          <div className="mission-listing-div">
            <div className="listing-block">
              <img src={require("../../../Assets/login.jpeg")} alt="listing" />
            </div>
            <span className="theme">Environment</span>
            <p className="listing-title">
              Grow Trees – On the path to environment sustainability
            </p>
            <p className="listing-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore...
            </p>
            <div className="organisation-div">
              <p>Oranisation Lorem</p>
              <span>Stars</span>
            </div>

            <span className="mission-dates">
              From 10/12/2022 untill 25/12/2022
            </span>

            <div className="seats-div">
              <div className="seats-div-left">
                <img
                  src={require("../../../Assets/signs/Already-volunteered.png")}
                  alt="done"
                />
                <div className="already-volunteered">
                  <span>{250}</span>
                  <p>Already volunteered</p>
                </div>
              </div>
              <div>deadline</div>
            </div>

            <div className="listing-footer">
              <button>Apply</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
