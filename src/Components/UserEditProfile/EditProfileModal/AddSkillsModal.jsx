import React, { useState } from "react";
import { allSkills } from "../../../Data/Data";
import { NormalButton } from "../../../Helper";
import "../editprofile.css";

export const AddSkillsModal = ({ selectedSkills, chosen }) => {
  const [addedSkills, setAddedSkills] = useState(chosen);


  const addSkills = (skill) => {
    if (!addedSkills.includes(skill)) {
      setAddedSkills((pre) => [...pre, skill]);
    }
  };

  const handleDelete = (e) => {
    var newData = addedSkills.filter((item) => item !== e);
    setAddedSkills(newData);
  };
  const handleSave = () => {
    selectedSkills(addedSkills);
  };
  return (
    <div className="add-skills-modal">
      <div>
        <div>
          {allSkills &&
            allSkills.sort().map((skill, key) => (
              <div
                key={key}
                className="each-skill"
                onClick={() => addSkills(skill)}
                style={{
                  backgroundColor: addedSkills.includes(skill)
                    ? "#e9e9e9"
                    : null,
                }}
              >
                {skill}
              </div>
            ))}
        </div>
        <div>
          <img src={require("../../../Assets/signs/arrow.png")} alt="" />
          <img src={require("../../../Assets/signs/left.png")} alt="" />
        </div>
        <div>
          {addedSkills &&
            addedSkills.sort().map((skill, key) => (
              <div
                key={key}
                className="each-skill"
                onClick={() => handleDelete(skill)}
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
      <div className="add-skill-modal-btn">
        <NormalButton className="edit-modal-cancel-btn" name="Cancel" />
        <NormalButton
          className="contactus-modal-change-btn"
          name="Save"
          btnClick={handleSave}
        />
      </div>
    </div>
  );
};
