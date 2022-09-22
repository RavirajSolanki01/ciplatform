import "../login.css";
import React from "react";
import { NormalButton, NormalInput } from "../../../Helper";

export const ResetPasswordDiv = ({ resetBtnClick }) => {
  return (
    <div className="reset-div" data-testid="reset-div">
      <p className="forgot-title">New Password</p>
      <p className="forgot-para">
        Please enter a new password in the fields below.
      </p>
      <NormalInput
        htmlfor="newpass"
        name="newpassword"
        type="password"
        label="New Password"
      />
      <NormalInput
        htmlfor="confpass"
        name="confpassword"
        type="password"
        label="Confirm Password"
      />
      <NormalButton
        name="Change Password"
        btnClick={() => resetBtnClick("registration")}
      />
      <button className="btn-none" onClick={() => resetBtnClick("login")}>
        Login
      </button>
    </div>
  );
};
