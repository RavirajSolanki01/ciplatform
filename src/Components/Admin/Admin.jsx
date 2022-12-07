import React from "react";
import { Header } from "./Header/Header";
import { Navigation } from "./Navigation/Navigation";
import "./admin.css";
import { Route, Routes } from "react-router-dom";
import { UserPage } from "./Pages/UserPage";
import { CMSPage } from "./Pages/CMSPage";
import { AdminMission } from "./Pages/AdminMission";
import { MissionApplication } from "./Pages/MissionApplication";
import { AdminStory } from "./Pages/AdminStory";

export const Admin = () => {
  return (
    <div>
      <div className="admin">
        <Navigation />
        <div className="admin-right">
          <Header />
          <div className="admin-right-common">
            <Routes>
              <Route exact path="/user" element={<UserPage />} />
              <Route exact path="/cms" element={<CMSPage />} />
              <Route exact path="/mission" element={<AdminMission />} />
              <Route exact path="/missionapplication" element={<MissionApplication />} />
              <Route exact path="/story" element={<AdminStory />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
