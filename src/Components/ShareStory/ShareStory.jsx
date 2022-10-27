import React from "react";
import ReactQuill from "react-quill";
import { dropdowndata, formats, modules } from "../../Data/Data";
import { NormalInput, NormalSelect } from "../../Helper";
import { Navbar } from "../Home/HomeElements/Navbar";
import "./sharestory.css";
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
import { useState } from "react";

export const ShareStory = () => {
  const ref = useRef();
  const [arr, setArr] = useState([]);
  const [file, setFile] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    ref.current.click();
    setFile(
      URL.createObjectURL(e.target.files[0]) &&
        URL.createObjectURL(e.target.files[0])
    );
    setArr((pre) => [
      ...pre,
      URL.createObjectURL(e.target.files[0]) &&
        URL.createObjectURL(e.target.files[0]),
    ]);
  };
  console.log(file, "KOKOKOK");
  console.log(arr, "ARR---000-0-0-00-0");

  return (
    <div>
      <Navbar />
      <div className="share-story-body">
        <span className="share-story-title">Share your story</span>
        <form>
          <div className="share-story-form-top">
            <NormalSelect
              items={dropdowndata}
              label="Select Mission"
              htmlfor="select-mission"
              placeholder="Select your mission"
              name="select-mission"
              className="share-story-select-mission"
            />

            <NormalInput
              label="My Story Title"
              placeholder="Enter story title"
              className="share-story-title-input"
            />
            <NormalInput
              label="Date"
              placeholder="Select date"
              className="share-story-date"
              type="date"
            />
          </div>

          <div>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              onChange={(e) => console.log(e)}
              className="share-story-quill"
            />
          </div>
          <div>
            <NormalInput
              label="Enter Video URL"
              placeholder="Enter your url"
              htmlfor="video-url"
              className="share-story-video-url"
              type="url"
            />
          </div>

          <div className="share-story-upload">
            <label htmlFor="">Upload your Photos</label>
            <button onClick={handleClick}>
              <img
                src={require("../../Assets/signs/drag-and-drop.png")}
                alt=""
              />
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              // name={name}
              ref={ref}
              onChange={(e) => handleClick(e)}
            />
            <div className="share-story-images">
              {arr &&
                arr.map((x) => (
                  <span>
                    {file && (
                      //   <img src={require("../../Assets/carousel1.png")} alt="" />
                      <img src={x} alt="" />
                    )}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <NormalInput
              label="Enter Video URL"
              placeholder="Enter your url"
              htmlfor="video-url"
              className="share-story-video-url"
              type="url"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
