import React from "react";
import { useSelector } from "react-redux";
import { listData } from "../../../Data/Data";
import { NormalButton } from "../../../Helper";
import { Progressbar } from "../../../Helper/Progressbar";
import { Rating } from "../../../Helper/Rating";
import "./homelements.css";

export const MissionListing = () => {
  const viewData = useSelector((state) => state.view.value);
  console.log(viewData, "NNNNN");

  return (
    <div
      className={`${
        viewData === "grid"
          ? "mission-listing-main"
          : "mission-listing-main-list"
      }`}
      data-testid="mission-listing"
    >
      {listData.map(
        ({
          id,
          theme,
          isApplied,
          paragraph,
          isFavourite,
          title,
          location,
          thumbnail,
          btnName,
          organisation,
          seats,
          deadline,
          goalObject,
        }) => {
          return (
            <div
              key={id}
              className={`${
                viewData === "grid"
                  ? "mission-listing-div"
                  : "mission-listing-div-list"
              }`}
            >
              <div className="imagediv">
                <div
                  className="mission-listing-location"
                  style={{
                    justifyContent: `${
                      isApplied === "applied" || isApplied === "closed"
                        ? "space-between"
                        : "flex-end"
                    }`,
                  }}
                >
                  {isApplied === "applied" ? (
                    <div>APPLIED</div>
                  ) : isApplied === "closed" ? (
                    <div>CLOSED</div>
                  ) : (
                    ""
                  )}
                  <button>
                    <img
                      src={
                        require("../../../Assets/signs/location.svg").default
                      }
                      alt=""
                    />
                    {location}
                  </button>
                </div>
                <div className="mission-listing-favourite">
                  <button>
                    {isFavourite ? (
                      <img
                        src={require("../../../Assets/signs/heart.svg").default}
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          require("../../../Assets/signs/heart1.svg").default
                        }
                        alt=""
                      />
                    )}
                  </button>
                </div>
                <div className="mission-listing-share">
                  <button>
                    <img
                      src={require("../../../Assets/signs/share.svg").default}
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
              </div>

              <div
                className={`${
                  viewData === "grid"
                    ? "mission-listing-body"
                    : "mission-listing-body-list"
                }`}
              >
                <div
                  className="organisation-div"
                  style={{ display: `${viewData === "grid" ? "none" : ""}` }}
                >
                  <div>
                    <span>
                      {" "}
                      <img
                        src={
                          require("../../../Assets/signs/location-dark.svg")
                            .default
                        }
                        alt=""
                      />{" "}
                      {location}
                    </span>
                    <span>{theme}</span>
                    <span>{organisation}</span>
                  </div>
                  <span>
                    <Rating stars={3} total={5} />
                  </span>
                </div>

                <p className="listing-title">{title}</p>
                <p
                  className={`${
                    btnName === "Apply"
                      ? "listing-short-description"
                      : "listing-long-description"
                  }`}
                >
                  {paragraph}
                </p>
                <div
                  className="organisation-div"
                  style={{ display: `${viewData === "list" ? "none" : ""}` }}
                >
                  <p>{organisation}</p>
                  <span>
                    <Rating stars={3} total={5} />
                  </span>
                </div>

                {/* nnnnnnnnnnnnnnnnnnnnnnnnnnnn */}
                <div className={`${viewData ==="list"&&"footer-list"}`}   >
                  {btnName === "Apply" && Object.keys(goalObject).length !== 0 && (
                    <div className="mission-dates-div">
                      <span className="mission-dates">
                        {goalObject.status === "objective"
                          ? goalObject.objective
                          : `From ${goalObject.startDate} untill ${goalObject.endDate}`}
                      </span>
                    </div>
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
                                  <Progressbar
                                    percent={deadline.achieved}
                                    total={deadline.total}
                                  />
                                  <span>{deadline.achieved}</span>
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
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
