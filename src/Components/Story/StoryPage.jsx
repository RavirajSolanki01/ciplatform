import React from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { storyCardData } from "../../Data/Data";
import { NormalButton } from "../../Helper";
import { Footer } from "../Footer/Footer";
import { Navbar, Searchbar } from "../Home/HomeElements";
import "./story.css";
import { StoryCard } from "./StoryCard";

export const StoryPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="story-div">
        <div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim venim, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </span>
          <NormalButton
            btnClick={() => navigate("/share-story")}
            className="story-btn"
            name="Share your Story"
            isArrow="white"
          />
        </div>
      </div>
      <div
        className="story-card-list"
        style={{ padding: "50px 240px 50px 240px" }}
      >
        {storyCardData.map(
          ({
            thumbnail,
            theme,
            title,
            description,
            person_img,
            person_name,
          }) => {
            return (
              <StoryCard
                description={description}
                person_img={person_img}
                person_name={person_name}
                title={title}
                theme={theme}
                thumbnail={thumbnail}
              />
            );
          }
        )}
      </div>
      <div className="story-pagination" data-testid="paginate">
        <div>
          <button>{"<<"}</button>
        </div>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={5}
          initialPage={0}
          className="pagination"
          nextClassName="next"
          nextLinkClassName="next-link"
          previousClassName="previous-class"
          previousLinkClassName="previous-link"
          pageClassName="page"
          activeClassName="active-page"
          pageLinkClassName="page-link"
          activeLinkClassName="active-link-page"
        />
        <div>
          <button>{">>"}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
