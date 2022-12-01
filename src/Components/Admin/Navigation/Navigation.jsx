import React, { useState } from "react";
import "../admin.css";
import { navigateData } from "../../../Data/Data";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);

  const handleClick = (id, route) => {
    setActive(id);
    navigate(route);
  };

  return (
    <div className="admin-navigation">
      <span>NAVIGATION</span>
      {navigateData?.map((nav) => (
        <div
          key={nav.id}
          className={
            active === nav.id
              ? "admin-navigation-item-dark admin-navigation-common"
              : "admin-navigation-common"
          }
          onClick={() => handleClick(nav.id, nav.route)}
        >
          <img
            src={require(`../../../Assets/navigation/${
              active === nav.id ? "dark" + nav.img : nav.img
            }`)}
            alt="img"
            style={{ height: "22px", width: "22px" }}
          />
          {nav.name}
        </div>
      ))}
    </div>
  );
};
