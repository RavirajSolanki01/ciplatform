import React from "react";
import { dropdowndata } from "../../Data/Data";
import { NormalInput, NormalSelect } from "../../Helper";
import "./form.css";

export const NewMissionForm = () => {
  return (
    <div className="new-mission-form">
      <form>
        <div>
          <NormalSelect
            htmlfor="country"
            name="Country"
            label="Country"
            items={dropdowndata}
            placeholder="Select Country"
            className="mission-form-select"
          />
          <NormalSelect
            htmlfor="city"
            label="City"
            name="City"
            items={dropdowndata}
            placeholder="Select City"
            className="mission-form-select"
          />
        </div>
        <NormalInput
          name="mission-title"
          htmlfor="mission-title"
          label="Mission Title"
          className="mission-form-title"
          placeholder="Enter Mission Title"
        />
        <NormalInput
          inputType="textarea"
          name="mission-description"
          htmlfor="mission-description"
          label="Mission Description"
          className="mission-form-description"
          placeholder="Enter your message"
        />
        <NormalInput
          name="mission-org"
          htmlfor="mission-org"
          label="Mission Organisation Name"
          className="mission-form-org"
          placeholder="Enter mission organisation name"
        />
        <NormalInput
          inputType="textarea"
          name="mission-org-detail"
          htmlfor="mission-org-detail"
          label="Mission Organisation Detail"
          className="mission-form-org-detail"
          placeholder="Enter mission organisation detail"
        />
      </form>
    </div>
  );
};
