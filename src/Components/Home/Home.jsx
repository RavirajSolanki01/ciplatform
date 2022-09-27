import React from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./home.css";
import { Missionbar, Navbar, Searchbar, Tagbar } from "./HomeElements";
import { MissionListing } from "./HomeElements/MissionListing";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div style={{ padding: "0 240px" }}>
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
      </div>
        <div className="main-footer">
          <Link to="/">Privacy Policy</Link>
        </div>
    </div>
  );
};
