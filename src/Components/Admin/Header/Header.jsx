import React from "react";

export const Header = () => {
  var currentdate = new Date();
  var datetime =
    "Last Sync: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  return (
    <div className="admin-header">
      <span>{datetime}</span>
      <span>Profile</span>
    </div>
  );
};
