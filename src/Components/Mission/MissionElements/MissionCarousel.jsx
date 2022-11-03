import React from "react";
import "./missionelement.css";
import { carouselData2, listData } from "../../../Data/Data";
import Slider from "react-slick";
import {
  BorderButton,
  NormalButton,
  Progressbar,
  Rating,
} from "../../../Helper";
import { InfoBox } from "../../../Helper/InfoBox";

export const MissionCarousel = () => {
  return (
    <div className="mission-carousel" data-testid="mission-carousel" >
      <div className="left-mission-carousel">
        <div>
          <img
            className="srrrc"
            src={require("../../../Assets/mission-pic.png")}
            alt=""
          />
        </div>
        <div className="preview-carousel-outer-div">
          <Slider
            infinite={false}
            speed={500}
            slidesToShow={4}
            arrows
            className="mission-slider"
            cssEase=""
          >
            {carouselData2 &&
              carouselData2.map(({ alt, imgsrc, paragraph, title }, key) => {
                return (
                  <div key={key} className="mission-carousel-div">
                    <img src={require(`../../../Assets/${imgsrc}`)} alt={alt} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>

      <div>
        {listData.map(
          ({
            id,
            title,
            paragraph,
            theme,
            goalObject,
            seats,
            deadline,
            rating,
            location,
            organisation,
          }) => {
            if (id === 4) {
              return (
                <div key={id}>
                  <p className="mission-title">{title}</p>
                  <span className="mission-subtitle">{paragraph}</span>
                  <div className="mission-objective">
                    <span>
                      {goalObject.status === "objective"
                        ? goalObject.objective
                        : `From ${goalObject.startDate} untill ${goalObject.endDate}`}
                    </span>
                  </div>
                  <div
                    // className={`${
                    //   viewData === "grid" ? "seats-div" : "seats-div-list"
                    // }`}
                    className="mission-seates"
                  >
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
                  <div className="fav-buttons">
                    <BorderButton logo="heart" name="Add to favourite" />
                    <BorderButton
                      logo="co-worker"
                      name="Recommend to a Co-Worker"
                    />
                  </div>
                  <div className="mission-rating">
                    <Rating
                      stars={rating.stars}
                      total={rating.total}
                      key={id}
                      isEmpty
                    />
                  </div>

                  <div className="infobox-div">
                    <InfoBox img="City" keyName="City" valueName={location} />
                    <InfoBox img="Theme" keyName="Theme" valueName={theme} />
                    <InfoBox
                      img="Date"
                      keyName="Date"
                      valueName={goalObject.objective || goalObject.startDate}
                    />
                    <InfoBox
                      img="Organization"
                      keyName="Organization"
                      valueName={organisation}
                    />
                  </div>
                  <div className="mission-apply">
                    <NormalButton isArrow name="Apply Now" />
                  </div>
                </div>
              );
            }
          }
        )}
      </div>
    </div>
  );
};
