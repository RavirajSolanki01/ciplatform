import React, { useState } from "react";
import "./login.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { carouselData } from "../../Data/Data";
import {
  ForgotPasswordDiv,
  LoginDiv,
  RegistrationDiv,
  ResetPasswordDiv,
} from "./LoginElements";

export const Login = () => {
  const [toggle, setToggle] = useState("login");

  return (
    <div className="login-comp" data-testid="login">
      <div className="login-image">
        <Carousel showThumbs={false}>
          {carouselData &&
            carouselData.map(({ alt, imgsrc, paragraph, title }, key) => {
              return (
                <div className="login-image" key={key} data-testid="carousel">
                  <img src={require(`../../Assets/${imgsrc}`)} alt={alt} />
                  <div className="legend">
                    <h3>{title}</h3>
                    <p>{paragraph}</p>
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>

      <div className="login-logic">
        {toggle === "login" ? (
          <LoginDiv loginBtnClick={(e) => setToggle(e)} />
        ) : toggle === "reset" ? (
          <ResetPasswordDiv resetBtnClick={(e) => setToggle(e)} />
        ) : toggle === "registration" ? (
          <RegistrationDiv registrationBtnClick={(e) => setToggle(e)} />
        ) : (
          <ForgotPasswordDiv forgotBtnClick={(e) => setToggle(e)} />
        )}
        <div className="policy">
          <div className="privacy-policy">
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
