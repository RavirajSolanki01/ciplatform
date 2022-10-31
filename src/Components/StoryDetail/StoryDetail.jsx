import React from "react";
import Slider from "react-slick";
import { carouselData2, storyDetailData } from "../../Data/Data";
import { BorderButton, NormalButton } from "../../Helper";
import { Footer } from "../Footer/Footer";
import { Navbar, Searchbar } from "../Home/HomeElements";
import "./storydetail.css";

export const StoryDetail = () => {
  return (
    <div className="story-detail-main">
      <Navbar />
      <Searchbar />
      <div className="story-detail-div">
        <div>
          <div className="left-mission-carousel">
            <div>
              <img
                className="srrrc"
                src={require("../../Assets/mission-pic.png")}
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
                  carouselData2.map(
                    ({ alt, imgsrc, paragraph, title }, key) => {
                      return (
                        <div key={key} className="mission-carousel-div">
                          <img
                            src={require(`../../Assets/${imgsrc}`)}
                            alt={alt}
                          />
                        </div>
                      );
                    }
                  )}
              </Slider>
            </div>
          </div>

          {storyDetailData.map(
            ({ id, description, img, imgName, views }) =>
              id === 1 && (
                <div className="story-detail-right-div" key={id}>
                  <div>
                    <span>
                      <img
                        src={require(`../../Assets/volunteers/${img}`)}
                        alt="volunteer"
                      />
                      <span>{imgName}</span>
                    </span>
                    <span>
                      <button>
                        <img
                          src={require("../../Assets/signs/eye.png")}
                          alt=""
                        />
                        {views} Views
                      </button>
                    </span>
                  </div>
                  <div className="story-detail-description">
                    {description.map((para) => (
                      <p>{para}</p>
                    ))}
                  </div>
                  <div className="story-detail-btn">
                    <BorderButton
                      logo="co-worker"
                      name="Recommend to a Co-Worker"
                      className="recommend-btn"
                    />
                    <NormalButton
                      isArrow
                      className="open-mission"
                      name="Open Mission"
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="story-detail-description-div">
        <div>
          <span className="story-detail-title">
            Grow Tress - On the path to environment sustainbility
          </span>

          <div className="story-detail-para">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
          <span className="story-detail-list-title">
            We use these technologies for a number of purposes, such as:
          </span>
          <ul className="story-detail-list-items">
            <li>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain.
            </li>
            <li>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi.
            </li>
            <li>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized
            </li>
            <li>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </li>
          </ul>
          <span className="last-para" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>

      <Footer/>
    </div>
  );
};
