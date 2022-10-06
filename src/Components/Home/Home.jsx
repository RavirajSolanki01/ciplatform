import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NormalButton } from "../../Helper";
import { setCookieBtnStatus } from "../../Redux/cookieReducer";
import "./home.css";
import { Missionbar, Navbar, Searchbar, Tagbar } from "./HomeElements";
import { MissionListing } from "./HomeElements/MissionListing";

export const Home = () => {
  const status = useSelector((state) => state.cookie.value);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setCookieBtnStatus(e));
  };

  return (
    <div className="home-main">
      <div>
        <Navbar />
        <Searchbar />
      </div>
      <div className="home-hero" style={{ padding: "0 240px" }}>
        {!true ? (
          <>
            <Tagbar />
            <Missionbar />
            <MissionListing />
            <div className="pagination-div">
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
          </>
        ) : (
          <div className="no-mission">
            No mission found
            <NormalButton isArrow name="Submit your mission" />
          </div>
        )}
      </div>
      <div className="main-footer">
        <Link to="/">Privacy Policy</Link>
      </div>

      <div
        className="cookies"
        style={{
          display: `${status === "close" || status === "agree" ? "none" : ""}`,
        }}
      >
        <div>
          <p>
            This website makes use of cookies to enhance browsing experience and
            provide additional functionality.
          </p>
          <Link>Privacy policy</Link>
        </div>
        <NormalButton
          name="I Agree"
          className="cookie-btn"
          btnClick={() => handleClick("agree")}
        />

        <div className="cookie-close-btn">
          <button onClick={() => handleClick("close")}>
            <img src={require("../../Assets/signs/cancel1.png")} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
