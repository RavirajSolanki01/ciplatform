import React, { useEffect, useState } from "react";
import "../admin.css";
import { navigateData } from "../../../Data/Data";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [active, setActive] = useState(navigateData[0].name);

  const handleClick = (route) => {
    setActive(route);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    setActive(pathname.toString().match(/(?<=admin\/)\w*/)[0]);
  }, []);

  return (
    <div className="admin-navigation">
      <span>NAVIGATION</span>
      {navigateData?.map((nav) => (
        <NavLink
          to={nav.route}
          key={nav.id}
          className="admin-navigation-common"
          onClick={() => handleClick(nav.route)}
        >
          <img
            src={require(`../../../Assets/navigation/${
              active === nav.route ? "dark" + nav.img : nav.img
            }`)}
            alt="img"
            style={{ height: "22px", width: "22px" }}
          />
          {nav.name}
        </NavLink>
      ))}
    </div>
  );
};
