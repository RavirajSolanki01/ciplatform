import React, { useState } from "react";
import "./login.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { NormalButton } from "../../Helper/NormalButton";
import { NormalInput } from "../../Helper/NormalInput";
import { carouselData } from "../../Data/Data";

export const Login = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="login-comp">
      <div className="login-image">
        <Carousel showThumbs={false}>
          {carouselData &&
            carouselData.map(({ alt, imgsrc, paragraph, title }) => {
              return (
                <div className="login-image">
                  <img src={require(`../../assets/${imgsrc}`)} alt={alt} />
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
        {toggle ? (
          <>
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
            <button className="lostpwd" onClick={() => setToggle(false)}>
              Lost your password?
            </button>
          </>
        ) : (
          <div className="forgot-password">
            <p className="forgot-title">Forgot Password</p>

            <p className="forgot-para">
              Enter your email address you've using for your account below and
              we will send you a password reset link
            </p>

            <NormalInput
              htmlfor="Email"
              name="email"
              type="email"
              label="Email Address"
            />
            <NormalButton name="Reset my Password" />
            <button className="btn-none" onClick={() => setToggle(true)}>
              Login
            </button>
          </div>
        )}
        <div className="privacy-policy">
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};
