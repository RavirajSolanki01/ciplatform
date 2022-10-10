import React from "react";
import { Navbar, Searchbar } from "../Home/HomeElements";
import { MissionCarousel } from "./MissionElements/MissionCarousel";
import { MissionInfo } from "./MissionElements/MissionInfo";

export const Mission = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div style={{ padding: "0 240px" }}>
        <MissionCarousel />
        <MissionInfo />
      </div>
    </div>
  );
};
