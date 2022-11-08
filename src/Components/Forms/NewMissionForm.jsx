import React from "react";
import { dropdowndata } from "../../Data/Data";
import { NormalButton, NormalInput, NormalSelect } from "../../Helper";
import { UploadInput } from "../../Helper/UploadInput";
import "./form.css";

export const NewMissionForm = () => {
  return (
    <div className="new-mission-form" data-testid="new-mission-form" >
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
          placeholder="Enter Mission Title"
          className="mission-form-title"
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
        <NormalInput
          type="date"
          name="mission-start-date"
          htmlfor="mission-start-date"
          label="Start Date"
          className="mission-form-start"
          placeholder="Select start date"
        />
        <NormalInput
          type="date"
          name="mission-end-date"
          htmlfor="mission-end-date"
          label="End Date"
          className="mission-form-end"
          placeholder="Select end date"
        />
        <NormalInput
          name="mission-total-seates"
          htmlfor="mission-total-seates"
          label="Total seats"
          placeholder="Enter total seats"
          className="mission-total-seates"
        />
        <NormalInput
          name="mission-registration-deadline"
          htmlfor="mission-registration-deadline"
          label="Mission registration deadline"
          placeholder="Enter mission registration deadline"
          className="mission-registration-deadline"
        />

        <NormalSelect
          htmlfor="mission-theme"
          label="Mission Theme"
          name="mission-theme"
          items={dropdowndata}
          placeholder="Select mission theme"
          className="mission-form-select"
        />
        <NormalSelect
          htmlfor="mission-skills"
          label="Mission Skills"
          name="mission-theme"
          items={dropdowndata}
          placeholder="Select mission Skills"
          className="mission-form-select"
        />
        <UploadInput
          label="Mission Images"
          htmlfor="upload-img"
          name="upload-img"
          placeholder="Upload image here*"
        />
        <UploadInput
          label="Mission Documents"
          htmlfor="upload-resume"
          name="upload-resume"
          placeholder="Drag and drop resume here or click*"
          instruction="Allowed file types: PDF, Doc"
        />
        <NormalSelect
          htmlfor="mission-availability"
          label="Mission Availability"
          name="mission-availability"
          items={dropdowndata}
          placeholder="Select availability"
          className="mission-form-select"
        />
        <div className="submit-form-div">
          <NormalButton
            type="cancel"
            name="Cancel"
            className="cancel-form-btn"
          />
          <NormalButton
            type="submit"
            name="Submit"
            className="submit-form-btn"
          />
        </div>
      </form>
    </div>
  );
};
