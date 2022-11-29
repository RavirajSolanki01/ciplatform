import React, { useState } from "react";
import "../admin.css";
import { navigateData } from "../../../Data/Data";

export const Navigation = () => {
  const [active, setActive] = useState(1);

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
          onClick={() => setActive(nav.id)}
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
