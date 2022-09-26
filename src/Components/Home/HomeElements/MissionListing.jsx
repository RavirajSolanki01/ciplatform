import React from "react";
import { listData } from "../../../Data/Data";
import { NormalButton } from "../../../Helper";
import { Progressbar } from "../../../Helper/Progressbar";
import { Rating } from "../../../Helper/Rating";
import "./homelements.css";

export const MissionListing = () => {
  [...Array(3)].map((x) => console.log("RUNS"));

  return (
    <div className="mission-listing-main">
      {listData.map(
        ({
          id,
          theme,
          isApplied,
          isFavourite,
          location,
          thumbnail,
          btnName,
          seats,
          deadline,
          goalObject,
        }) => {
          return (
            <div key={id} className="mission-listing-div">
              <div className="mission-listing-location">
                <button>
                  <img
                    src={require("../../../Assets/signs/location.svg").default}
                    alt=""
                  />
                  {location}
                </button>
              </div>
              <div className="mission-listing-favourite">
                <button>
                  <img
                    src={require("../../../Assets/signs/heart.png")}
                    alt=""
                  />
                </button>
              </div>
              <div className="mission-listing-share">
                <button>
                  <img
                    src={require("../../../Assets/signs/add1.png")}
                    alt=""
                  />
                </button>
              </div>

              <div className="listing-block">
                <img
                  src={require(`../../../Assets/${thumbnail}`)}
                  alt="listing"
                />
              </div>
              <span className="theme">{theme}</span>
              <p className="listing-title">
                Grow Trees – On the path to environment sustainability
              </p>
              <p
                className={`${
                  btnName === "Apply"
                    ? "listing-short-description"
                    : "listing-long-description"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Deserunt nesciunt dicta nam nulla autem dolore
                recusandae laboriosam alias rem itaque?
              </p>
              <div className="organisation-div">
                <p>Oranisation Lorem</p>
                <span>
                  <Rating stars={3} total={5} />
                </span>
              </div>

              {btnName === "Apply" && Object.keys(goalObject).length !== 0 && (
                <span className="mission-dates">
                  {goalObject.status === "objective"
                    ? goalObject.objective
                    : `From ${goalObject.startDate} untill ${goalObject.endDate}`}
                </span>
              )}

              {btnName === "Apply" && (
                <div className="seats-div">
                  {Object.keys(seats).length !== 0 && (
                    <div className="seats-div-left">
                      <div>
                        {seats.status === "left" ? (
                          <img
                            src={require("../../../Assets/signs/Seats-left.png")}
                            alt="done"
                          />
                        ) : (
                          <img
                            src={require("../../../Assets/signs/Already-volunteered.png")}
                            alt="done"
                          />
                        )}
                      </div>
                      <div className="already-volunteered">
                        <span>{seats.count}</span>
                        <p>
                          {seats.status === "left"
                            ? "Seats left"
                            : "Already volunteered"}
                        </p>
                      </div>
                    </div>
                  )}
                  <div>
                    {Object.keys(deadline).length !== 0 && (
                      <div>
                        {deadline.status === "deadline" ? (
                          <div className="deadline">
                            <div>
                              <img
                                src={require("../../../Assets/signs/deadline.png")}
                                alt="mission"
                              />
                            </div>
                            <div>
                              <span>{deadline.date}</span>
                              <span>Deadline</span>
                            </div>
                          </div>
                        ) : (
                          <div className="goal">
                            <div>
                              <img
                                src={require("../../../Assets/signs/mission.png")}
                                alt="mission"
                              />
                            </div>
                            <div>
                              <Progressbar percent={8000} total={10000} />
                              <span>8000</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="listing-footer">
                <NormalButton
                  name={btnName}
                  isArrow={true}
                  className="apply-btn"
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
