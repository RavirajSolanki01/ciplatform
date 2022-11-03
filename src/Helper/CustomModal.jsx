import React, { useEffect, useRef } from "react";

export const CustomModal = ({
  children,
  closeModal,
  width,
  height,
  top,
  title,
  isCloseBtn,
}) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      closeModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="modal-outer" data-testid="custom-modal" >
      <div
        ref={ref}
        className="modal-inner"
        style={{ width: width, height: height, top: top }}
      >
        <div className="modal-title-div">
          <span>{title || "Title"}</span>
          {isCloseBtn && (
            <button
            data-testid="close-modal"
              className="modal-close-btn"
              onClick={() => closeModal(false)}
            >
              <img src={require("../Assets/signs/cancel1.png")} alt="X" />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
