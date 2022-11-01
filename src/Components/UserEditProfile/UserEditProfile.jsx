import React, { useState } from "react";
import { dropdowndata } from "../../Data/Data";
import {
  CustomModal,
  NormalButton,
  NormalInput,
  NormalSelect,
} from "../../Helper";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Home/HomeElements";
import "./editprofile.css";
import { ChangeProfileModal } from "./EditProfileModal/ChangeProfileModal";
import { ContactUsModal } from "./EditProfileModal/ContactUsModal";

export const UserEditProfile = () => {
  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [contactUs, setContatcUs] = useState(false);

  const deleteSkill = (e) => {
    var newData = skills.filter((skill) => skill !== e);
    setSkills(newData);
  };

  const handleChange = () => {
    if (value) return null;
    setSkills((pre) => [...pre, value]);
    setValue("");
  };

  return (
    <div data-testId="user-edit-profile-div" >
      <Navbar />
      <div className="edit-profile-main">
        <div className="edit-profile-left">
          <img src={require("../../Assets/signs/group-32.png")} alt="user" />
          <span>Evan Donohue</span>

          <button onClick={() => setShowModal(true)}>Change Password</button>
          <button onClick={() => setContatcUs(true)}>Contact Us</button>

          {showModal ? (
            <CustomModal
              isCloseBtn
              closeModal={() => setShowModal(false)}
              title="Change Password"
            >
              <ChangeProfileModal />
            </CustomModal>
          ) : null}

          {contactUs ? (
            <CustomModal
              isCloseBtn
              closeModal={() => setContatcUs(false)}
              title="Contact Us"
            >
              <ContactUsModal />
            </CustomModal>
          ) : null}
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
              label="Availablity"
              items={dropdowndata}
              placeholder="Select your availablity"
              className="edit-profile-select"
            />

            <NormalInput
              label="LinkedIn"
              placeholder="Enter linkedIn URL"
              className="edit-profile-input"
              htmlfor="linkedin"
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
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add your skills"
            />
          </div>
          <div className="edit-profile-add-div">
            <NormalButton
              name="Add Skills"
              className="edit-profile-add-skills"
              btnClick={handleChange}
            />
          </div>
          <div className="edit-profile-save-div">
            <NormalButton className="edit-profile-btn-save" name="Save" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
