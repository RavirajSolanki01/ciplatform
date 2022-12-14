import React, { useState } from "react";
import { useSelector } from "react-redux";
import { listData } from "../../../Data/Data";
import "./homelements.css";
import { MissionList } from "./MissionList";

export const MissionListing = () => {
  const viewData = useSelector((state) => state.view.value);
  const [missionData, SetMissionData] = useState(listData);

  const handleChange = (e) => {
    SetMissionData(
      listData.filter((data) => {
        return data.title.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };


  
  return (
    <div
      className={`${
        viewData === "grid"
          ? "mission-listing-main"
          : "mission-listing-main-list"
      }`}
      data-testid="mission-listing"
    >
      {missionData.map(
        ({
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
            <MissionList
              key={id}
              id={id}
              thumbnail={thumbnail}
              isFavourite={isFavourite}
              location={location}
              theme={theme}
              isApplied={isApplied}
              paragraph={paragraph}
              rating={rating}
              title={title}
              btnName={btnName}
              skills={skills}
              organisation={organisation}
              seats={seats}
              deadline={deadline}
              goalObject={goalObject}
            />
          );
        }
      )}
    </div>
  );
};
