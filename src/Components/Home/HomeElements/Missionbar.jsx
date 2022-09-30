import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropdowndata } from "../../../Data/Data";
import { DropDown } from "../../../Helper";
import { setView } from "../../../Redux/viewReducer";
import "./homelements.css";

export const Missionbar = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view.value);
  const handleClick = (e) => {
    dispatch(setView(e));
  };
  return (
    <div className="missionbar" data-testid="missionbar">
      <span className="mission-span">
        Explore{" "}
        <span>
          {72} {72 ? "missions" : "mission"}
        </span>
      </span>
      <div className="mission-right">
        <div className="mission-sort">
          <DropDown name="Sort by" items={dropdowndata} />
        </div>
        <button
          className={`${view === "grid" ? "active-view" : ""} mission-grid-btn`}
          onClick={() => handleClick("grid")}
        >
          <img
            src={require("../../../Assets/signs/squaresfour.svg").default}
            alt=""
          />
        </button>
        <button
          className={`${view === "list" ? "active-view" : ""} mission-grid-btn`}
          onClick={() => handleClick("list")}
        >
          <img src={require("../../../Assets/signs/menu.svg").default} alt="" />
        </button>
      </div>
    </div>
  );
};
