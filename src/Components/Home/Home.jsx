import React from "react";
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
      </div>
    </div>
  );
};
