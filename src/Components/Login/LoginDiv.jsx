import React from "react";
import "./login.css";
import { NormalButton, NormalInput } from "../../Helper";

export const LoginDiv = ({loginBtnClick}) => {
  return (
    <div className="login-div" data-testid="login-div">
      <NormalInput
        htmlfor="Email"
        name="email"
        type="email"
        label="Email Address"
      />
      <NormalInput
        htmlfor="password"
        name="password"
        type="password"
        label="Password"
      />
      <NormalButton name="Login" />
      <button
        className="lostpwd"
        onClick={() => loginBtnClick("forgot")}
        data-testid="lost-password"
      >
        Lost your password?
      </button>
    </div>
  );
};
