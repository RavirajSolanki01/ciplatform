import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar, Searchbar } from "../Home/HomeElements";
import { MissionCarousel } from "./MissionElements/MissionCarousel";
import { MissionInfo } from "./MissionElements/MissionInfo";
import { RelatedMissions } from "./MissionElements/RelatedMissions";

export const Mission = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div style={{ padding: "0 240px" }}>
        <MissionCarousel />
        <MissionInfo />
        <RelatedMissions />
      </div>
      <Footer/>
    </div>
  );
};
