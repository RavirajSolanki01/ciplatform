import React, { useState } from "react";
import { tagsdata } from "../../../Data/Data";
import "./homelements.css";

export const Tagbar = () => {
  const [tags, setTags] = useState(tagsdata);

  const filtertags = (e) => {
    setTags(tags.filter((x) => x.id !== e));
  };

  return (
    <div
      className="tagbar"
      style={{ display: `${tags.length === 0 && "none"}` }}
      data-testid="tagbar"
    >
      {tags &&
        tags.map((tag) => {
          return (
            <span className="tag-btn" key={tag.id}>
              {tag.element}
              <button className="tag-close" onClick={() => filtertags(tag.id)}>
                <img
                  className="close-svg"
                  src={require("../../../Assets/signs/close.svg").default}
                  alt=""
                />
              </button>
            </span>
          );
        })}
      <button className="btn-none clear-btn" onClick={() => setTags("")}>
        Clear all
      </button>
    </div>
  );
};
