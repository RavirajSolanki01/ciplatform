import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="main-footer" data-testid="footer" >
      <Link to="/privacy">Privacy Policy</Link>
    </div>
  );
};
