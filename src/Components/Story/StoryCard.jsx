import React from "react";
import { NormalButton } from "../../Helper";
import "./story.css";

export const StoryCard = ({
  thumbnail,
  theme,
  title,
  description,
  person_img,
  person_name,
}) => {
  return (
    <div className="storycard-div" data-testid="storycard-div" >
      <div>
        <img data-testid="thumbnail"  src={require(`../../Assets/${thumbnail}`)} alt={thumbnail} />
        <span className="storycard-theme">{theme}</span>
        <div className="storycard-hover">
          <NormalButton
            className="storycard-hover-btn"
            name="View Details"
            isArrow="white"
          />
        </div>
      </div>
      <div>
        <p  data-testid="story-card-title" className="storycard-title">{title}</p>
        <p data-testid="story-card-desp" className="storycard-short-description">{description}</p>
      </div>
      <div className="storycard-person">
        <img data-testid="person"
          src={require(`../../Assets/volunteers/${person_img}`)}
          alt={person_img}
        />
        <span data-testid="person-name" >{person_name}</span>
      </div>
    </div>
  );
};
