import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CustomModal, DropDown, NormalButton } from "../../../Helper";
import { NewMissionForm } from "../../Forms";
import "./homelements.css";

export const Navbar = () => {
  const pathArray = window.location.pathname.split("/");

  console.log(pathArray.includes("share-story"));

  const btnlist = [
    { name: "Item 1", link: "www.google.com" },
    { name: "Item 2", link: "www.google.com" },
    { name: "Item 3", link: "www.google.com" },
  ];

  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);

  const closeModal = () => {
    setshowModal(true);
  };

  return (
    <div className="navbar" data-testid="navbar">
      <div className="navbar-list">
        <div>
          <DropDown name="Explore" items={btnlist} />
        </div>
        <div data-testid="stories-btn" onClick={() => navigate("/story")}>
          Stories
        </div>
        <div>
          <DropDown name="Policy" items={btnlist} />
        </div>
      </div>

      <div className="navbar-profile">
        {!pathArray.includes("share-story") && (
          <NormalButton
            name="Submit new mission"
            className="submit-navbar"
            btnClick={closeModal}
          />
        )}

        <img
          className="profile-img"
          src={require("../../../Assets/signs/group-32.png")}
          alt="profile"
        />
        <div className="navbar-profile-drop-div">
          <div className="profile-options" >
            <span>Evan Donohue</span>
            <div className="profile-options-in" >
              <Link to="/edit-profile">Profile</Link>
              <Link to="/timesheet">Volunteering Timesheet</Link>
              <Link to="/">Log Out</Link>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <CustomModal
          title="Add New Mission"
          closeModal={setshowModal}
          width="580px"
          top="214px"
          isCloseBtn
        >
          <NewMissionForm cancelBtnClick={() => setshowModal(false)} />
        </CustomModal>
      )}
    </div>
  );
};
