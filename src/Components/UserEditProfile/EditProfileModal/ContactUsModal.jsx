import React from "react";
import { NormalButton, NormalInput } from "../../../Helper";
import "../editprofile.css";
export const ContactUsModal = ({ closeModal }) => {
  return (
    <div>
      <NormalInput
        isDisabled
        label="Name*"
        className="contactus-modal-input"
        value="Evan Donohue"
      />
      <NormalInput
        isDisabled
        label="Email Address*"
        className="contactus-modal-input"
        value="evan@gmail.com"
      />
      <NormalInput
        label="Subject*"
        className="contactus-modal-input"
        placeholder="Enter your  Subject"
        htmlfor="subject"
      />
      <NormalInput
        inputType="textarea"
        label="Message*"
        className="contactus-modal-textarea"
        placeholder="Enter your Message"
        htmlfor="message"
      />
      <div className="contactus-modal-btn">
        <NormalButton
          className="edit-modal-cancel-btn"
          name="Cancel"
          btnClick={closeModal}
        />
        <NormalButton className="contactus-modal-change-btn" name="Save" />
      </div>
    </div>
  );
};
