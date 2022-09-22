import React from "react";
import { NormalButton, NormalInput } from "../../../Helper";

export const RegistrationDiv = ({registrationBtnClick}) => {
  return (
    <div className="registration-div" data-testid="registration-div">
      <NormalInput
        htmlfor="firstname"
        name="firstname"
        type="text"
        label="First Name"
      />
      <NormalInput
        htmlfor="lastname"
        name="lastname"
        type="text"
        label="Last Name"
      />
      <NormalInput
        htmlfor="email"
        name="email"
        type="email"
        label="Email Address"
      />
      <NormalInput
        htmlfor="phone"
        name="phone"
        type="tel"
        label="Phone Number"
      />
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
        name="Register"
        btnClick={() => console.log("Register")}
      />
      <button
        className="btn-none"
        onClick={() => registrationBtnClick("login")}
      >
        Login
      </button>
    </div>
  );
};
