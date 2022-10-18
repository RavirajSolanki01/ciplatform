import React from "react";
import { relatedMission } from "../../../Data/Data";
import { MissionList } from "../../Home/HomeElements/MissionList";
export const RelatedMissions = () => {
  return (
    <div className="related-mission-div" >
      <div>Related Missions</div>
      <div className="related-mission-listing">
        {relatedMission.map(
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
          }) => (
           
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
          )
        )}
      </div>
      
    </div>
  );
};
