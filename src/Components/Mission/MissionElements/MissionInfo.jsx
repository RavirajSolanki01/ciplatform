import React, { useEffect } from "react";
import { useState } from "react";
import { infoData, missionTabs, volunteers } from "../../../Data/Data";
import { Rating } from "../../../Helper";
import "./missionelement.css";
import {
  CommentsInfo,
  MissionAllInformation,
  OrganizationInfo,
  SponsoredInfo,
} from "./MissionHelper";

export const MissionInfo = () => {
  const [active, setActive] = useState(missionTabs[0]);

  const [posts, setPosts] = useState(volunteers);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (e) => {
    const p = currentPage + e;
    if (p < 1 || p > pageNumbers.length) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(p);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(volunteers);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="mission-info">
      <div className="mission-feature-left">
        <ul className="mission-tabs">
          {missionTabs.map((tab) => (
            <li
              key={tab}
              className={tab === active ? "active-tab" : undefined}
              onClick={() => setActive(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div>
          {active === "Mission" ? (
            <MissionAllInformation />
          ) : active === "Organization" ? (
            <OrganizationInfo />
          ) : active === "Sponsored" ? (
            <SponsoredInfo />
          ) : (
            <CommentsInfo />
          )}
        </div>
      </div>
      <div>
        <div className="mission-feature-right">
          <div>
            <span>Information</span>
          </div>
          <div>
            {infoData.map((item, key) => {
              return item.infoKey === "Rating" ? (
                <div key={key} className="feature-info">
                  <span>{item.infoKey}</span>
                  <Rating stars={item.infoValue} total={5} />{" "}
                  <span>(by {item.rate} volunteers )</span>
                </div>
              ) : (
                <div key={key} className="feature-info">
                  <span>{item.infoKey}</span> <span>{item.infoValue}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="mission-volunteers mission-feature-right">
            <div>
              <span>Recent Volunteers</span>
            </div>
            <div className="volunteer-outer-div">
              {currentPosts.map((item, key) => {
                return (
                  <div className="volunteers-el" key={key}>
                    <img
                      src={require(`../../../Assets/volunteers/${item.img}`)}
                      alt=""
                    />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="navigation-vol">
            <button onClick={() => handleClick(-1)}>
              <img src={require("../../../Assets/signs/left.png")} alt="" />
            </button>
            <span>
              {indexOfFirstPost + 1}&nbsp;-&nbsp;
              {postsPerPage !== currentPosts.length
                ? indexOfLastPost - currentPosts.length + 1
                : indexOfLastPost}{" "}
              of {posts.length} Recent Volunteers
            </span>
            <button onClick={() => handleClick(+1)}>
              <img src={require("../../../Assets/signs/arrow.png")} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
