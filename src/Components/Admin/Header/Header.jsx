import moment from "moment/moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
};
