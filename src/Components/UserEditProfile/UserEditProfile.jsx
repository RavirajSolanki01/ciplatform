import React, { useRef, useState } from "react";
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
import { AddSkillsModal } from "./EditProfileModal/AddSkillsModal";
import { ChangeProfileModal } from "./EditProfileModal/ChangeProfileModal";
import { ContactUsModal } from "./EditProfileModal/ContactUsModal";

export const UserEditProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [contactUs, setContatcUs] = useState(false);
  const [skillsModal, setSkillsModal] = useState(false);
  const [chosenSkills, setChosenSkills] = useState([
    "Computer Science",
    "Data Entry",
  ]);

  const ref = useRef();
  const [file, setFile] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    ref.current.click();
    if (e.target.files && e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div data-testid="user-edit-profile-div">
      <Navbar />
      <div className="edit-profile-main">
        <div className="edit-profile-left" data-testid="edit-profile-left">
          <div>
            {!file ? (
              <img
                src={require("../../Assets/signs/group-32.png")}
                alt="user"
                className="selected-img"
              />
            ) : (
              <img src={file} alt="user" className="selected-img" />
            )}

            <div className="add-img-div" onClick={handleClick}>
              <img
                className="add-img"
                src={require("../../Assets/signs/add-white.png")}
                alt="user"
              />
            </div>
          </div>
          <input
            style={{ display: "none" }}
            type="file"
            name={"upload"}
            ref={ref}
            onChange={(e) => handleClick(e)}
          />
          <span>Evan Donohue</span>
          <button
            data-testid="change-password"
            onClick={() => setShowModal(true)}
          >
            Change Password
          </button>
          <button data-testid="contact-us" onClick={() => setContatcUs(true)}>
            Contact Us
          </button>
        </div>
        {showModal ? (
          <CustomModal
            isCloseBtn
            closeModal={() => setShowModal(false)}
            title="Change Password"
          >
            <ChangeProfileModal closeModal={() => setShowModal(false)} />
          </CustomModal>
        ) : null}

        {contactUs ? (
          <CustomModal
            isCloseBtn
            closeModal={() => setContatcUs(false)}
            title="Contact Us"
          >
            <ContactUsModal closeModal={() => setContatcUs(false)} />
          </CustomModal>
        ) : null}

        <div className="edit-profile-right" data-testid="edit-profile-right">
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
            {chosenSkills &&
              chosenSkills.map((skill, key) => <div key={key}>{skill}</div>)}
          </div>
          {skillsModal ? (
            <CustomModal
              width={906}
              title="Add your Skills"
              isCloseBtn
              closeModal={() => setSkillsModal(false)}
            >
              <AddSkillsModal
                chosen={chosenSkills}
                closeModal={() => setSkillsModal(false)}
                selectedSkills={(item) => {
                  setChosenSkills(item);
                  setSkillsModal(false);
                }}
              />
            </CustomModal>
          ) : null}
          <div className="edit-profile-add-div">
            <NormalButton
              name="Add Skills"
              className="edit-profile-add-skills"
              btnClick={() => setSkillsModal(true)}
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
