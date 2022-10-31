import React, { useState } from "react";
import { dropdowndata } from "../../Data/Data";
import { NormalInput, NormalSelect } from "../../Helper";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Home/HomeElements";
import "./editprofile.css";

export const UserEditProfile = () => {
  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState("");

  const deleteSkill = (e) => {
    var newData = skills.filter((skill) => skill !== e);
    setSkills(newData);
  };

  const handleChange = (e) => {
    if (e.key === "Enter") {
      setSkills((pre) => [...pre, e.target.value]);
      setValue("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="edit-profile-main">
        <div className="edit-profile-left">
          <img src={require("../../Assets/signs/group-32.png")} alt="user" />
          <span>Evan Donohue</span>
        </div>
        <div className="edit-profile-right">
          <span className="edit-profile-title">
            <span>Basic Information</span>
          </span>
          <div className="edit-profile-inputs">
            <NormalInput
              label="Name*"
              placeholder="Enter your name"
              className="edit-profile-input"
              htmlfor="name"
            />
            <NormalInput
              label="Surname*"
              placeholder="Enter your surname"
              className="edit-profile-input"
              htmlfor="surname"
            />
            <NormalInput
              label="Employee ID"
              placeholder="Enter your employee id"
              className="edit-profile-input"
              htmlfor="employeeid"
            />
            <NormalInput
              label="Manager"
              placeholder="Enter your manager details"
              className="edit-profile-input"
              htmlfor="manager"
            />
            <NormalInput
              label="Title"
              placeholder="Enter your employee id"
              className="edit-profile-input"
              htmlfor="title"
            />
            <NormalInput
              label="Department"
              placeholder="Enter your manager details"
              className="edit-profile-input"
              htmlfor="department"
            />
            <NormalInput
              inputType="textarea"
              label="My Profile*"
              placeholder="Enter your comments..."
              className="edit-profile-textarea"
              htmlfor="profile"
            />
            <NormalInput
              inputType="textarea"
              label="Why I Volunteer?"
              placeholder="Enter your comments..."
              className="edit-profile-textarea"
              htmlfor="volunteer"
            />
          </div>
          <span className="edit-profile-title">
            <span>Address Information</span>
          </span>
          <div className="edit-profile-inputs">
            <NormalInput
              label="City"
              placeholder="Enter your city"
              className="edit-profile-input"
              htmlfor="city"
            />

            <NormalSelect
              htmlfor="country"
              name="Country"
              label="Country*"
              items={dropdowndata}
              placeholder="Select your country"
              className="edit-profile-select"
            />
          </div>
          <span className="edit-profile-title">
            <span>Professional Information</span>
          </span>

          <div className="edit-profile-inputs">
            <NormalSelect
              htmlfor="country"
              name="Country"
              label="Country*"
              items={dropdowndata}
              placeholder="Select your country"
              className="edit-profile-select"
            />

            <NormalInput
              label="LinkedIn"
              placeholder="Enter linkedIn URL"
              className="edit-profile-input"
              htmlfor="title"
              type="url"
            />
          </div>

          <span className="edit-profile-title">
            <span>My Skills</span>
          </span>

          <div className="edit-profile-skills">
            {skills.length
              ? skills.map((skill) => (
                  <span>
                    <div>{skill}</div>
                    <button onClick={() => deleteSkill(skill)}>
                      <img
                        src={require("../../Assets/signs/cancel.png")}
                        alt=""
                      />
                    </button>
                  </span>
                ))
              : null}
            <input
              type="text"
              onKeyUp={handleChange}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add your skills"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
