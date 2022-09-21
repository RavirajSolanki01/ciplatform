import React from "react";
import "./login.css";
import { NormalButton, NormalInput } from "../../Helper";

export const ForgotPasswordDiv = ({ forgotBtnClick }) => {
  return (
    <div className="forgot-div" data-testid="forgot-password">
      <p className="forgot-title">Forgot Password</p>

      <p className="forgot-para">
        Enter your email address you've using for your account below and we will
        send you a password reset link
      </p>

      <NormalInput
        htmlfor="Email"
        name="email"
        type="email"
        label="Email Address"
      />
      <NormalButton
        name="Reset my Password"
        btnClick={() => forgotBtnClick("reset")}
      />
      <button
        data-testid="forgot-login-btn"
        className="btn-none"
        onClick={() => forgotBtnClick("login")}
      >
        Login
      </button>
    </div>
  );
};
