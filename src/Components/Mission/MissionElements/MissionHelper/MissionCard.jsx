import React from "react";
import "./missionhelper.css";

export const MissionCard = ({
  id,
  theme,
  isApplied,
  paragraph,
  isFavourite,
  rating,
  title,
  location,
  thumbnail,
  btnName,
  skills,
  organisation,
  seats,
  deadline,
  goalObject,
}) => {
  return (
    <div className="mission-card" key={id}>
      <div className="card-img-div">
        <div
          className="mission-listing-location"
          style={{ justifyContent: "flex-end" }}
        >
          <button>
            <img
              src={require("../../../../Assets/signs/location.svg").default}
              alt=""
            />
            {location}
          </button>
        </div>

        <div className="mission-listing-favourite">
          <button>
            {isFavourite ? (
              <img
                src={require("../../../../Assets/signs/heart.svg").default}
                alt=""
              />
            ) : (
              <img
                src={require("../../../../Assets/signs/heart1.svg").default}
                alt=""
              />
            )}
          </button>
        </div>
        <div className="mission-listing-share">
          <button>
            <img
              src={require("../../../../Assets/signs/share.svg").default}
              alt=""
            />
          </button>
        </div>
        <div className="listing-block">
          <img src={require(`../../../../Assets/${thumbnail}`)} alt="listing" />
        </div>
        <span className="theme">{theme}</span>
      </div>
    </div>
  );
};
