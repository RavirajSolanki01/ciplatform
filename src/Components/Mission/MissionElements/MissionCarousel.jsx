// import React from "react";
// import "./missionelement.css";
// import { Carousel } from "react-responsive-carousel";
// import { carouselData } from "../../../Data/Data";

// export const MissionCarousel = () => {
//   return (
//     <div className="mission-carousel">

//         {/* <img src={require("../../../Assets/carousel1.png")} alt="" /> */}
//         <div className="preview-carousel-outer-div">
//           <Carousel showThumbs={false} showIndicators={false}>
//             {carouselData &&
//               carouselData.map(({ alt, imgsrc, paragraph, title }, key) => {
//                 return (
//                   <div className="preview-carousel" key={key}>
//                     <img src={require(`../../../Assets/${imgsrc}`)} alt={alt} />
//                   </div>
//                 );
//               })}
//           </Carousel>
//         </div>

//       <div>Rightside</div>
//     </div>
//   );
// };

import React from "react";
import "./missionelement.css";
import { carouselData2, listData } from "../../../Data/Data";
import Slider from "react-slick";

export const MissionCarousel = () => {
  return (
    <div className="mission-carousel">
      <div className="left-mission-carousel" >
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
        {listData.map(({ id, title, paragraph, goalObject }) => {
          if (id === 1) {
            return (
              <div key={id}>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "38px",
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </p>
                <p style={{ textAlign: "left" }}>{paragraph}</p>
                <div>
                  <div>{goalObject.status}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
