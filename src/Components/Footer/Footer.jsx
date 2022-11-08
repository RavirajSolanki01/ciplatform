import React from "react";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <div className="main-footer" data-testid="footer">
      <HashLink to="/privacy/#privacy-page" data-testid="privacy-policy-btn">
        Privacy Policy
      </HashLink>
    </div>
  );
};
