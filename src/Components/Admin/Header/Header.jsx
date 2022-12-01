import moment from "moment/moment";
import { useEffect, useState } from "react";
import { DropDown } from "../../../Helper";

const btnlist = [
  { name: "Item 1", link: "www.google.com" },
  { name: "Item 2", link: "www.google.com" },
  { name: "Item 3", link: "www.google.com" },
];
export const Header = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    setInterval(() => {
      setState(moment().format("LLLL"));
    }, 1000);
  }, []);

  return (
    <div className="admin-header">
      <span>{state}</span>
      <div className="header-profile">
        <img
          className="profile-img"
          src={require("../../../Assets/signs/group-32.png")}
          alt="profile"
        />
        <div className="navbar-profile-drop-div">
          <DropDown name="Evan Donohue" items={btnlist} />
        </div>
      </div>
    </div>
  );
};
