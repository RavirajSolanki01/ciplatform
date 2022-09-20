import React from "react";
import "./login.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { NormalButton } from "../../Helper/NormalButton";
import { NormalInput } from "../../Helper/NormalInput";

export const Login = () => {
  return (
    <div className="login-comp">
      <div className="login-image">
        <Carousel showThumbs={false}>
          <div className="login-image">
            <img src={require("../../assets/login.jpeg")} alt="planting" />
            <div className="legend">
              <h3>Sed ut perspiciatis unde omnis iste natus voluptatem.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="login-image">
            <img src={require("../../assets/login.jpeg")} alt="planting" />
          </div>
          <div className="login-image">
            <img src={require("../../assets/login.jpeg")} alt="planting" />
          </div>
          <div className="login-image">
            <img src={require("../../assets/login.jpeg")} alt="planting" />
          </div>
        </Carousel>
      </div>

      <div className="login-logic">
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

        <Link className="lostpwd" to="/">
          Lost your password?
        </Link>

        <div className="privacy-policy">
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};
