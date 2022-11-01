import React from "react";
import { NormalButton, NormalInput } from "../../../Helper";
import "../editprofile.css";

export const ChangeProfileModal = () => {
  return (
    <>
      <NormalInput
        placeholder="Enter old password"
        className="edit-profile-modal-inp"
        type="password"
      />
      <NormalInput
        placeholder="Enter new password"
        className="edit-profile-modal-inp"
        type="password"
      />
      <NormalInput
        placeholder="Enter confirm password"
        className="edit-profile-modal-inp"
      />
      <div className="edit-profile-modal-div">
        <NormalButton className="edit-modal-cancel-btn" name="Cancel" />
        <NormalButton
          className="edit-modal-change-btn"
          name="Change Password"
        />
      </div>
    </>
  );
};
