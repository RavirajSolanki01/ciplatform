import React from "react";
import { useState } from "react";
import { missionTabs } from "../../../Data/Data";
import "./missionelement.css";

export const MissionInfo = () => {
  const [active, setActive] = useState(missionTabs[0]);

  return (
    <div>
      <div>
        <ul className="mission-tabs">
          {missionTabs.map((tab) => (
            <li
              key={tab}
              className={tab === active ? "active-tab" : undefined}
              onClick={() => setActive(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
