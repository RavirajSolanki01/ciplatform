import React from "react";
import ReactQuill from "react-quill";
import { dropdowndata, formats, modules } from "../../Data/Data";
import { NormalButton, NormalInput, NormalSelect } from "../../Helper";
import { Navbar } from "../Home/HomeElements/Navbar";
import { Footer } from "../Footer/Footer";
import "./sharestory.css";
import "react-quill/dist/quill.snow.css";
import { useRef, useState } from "react";

export const ShareStory = () => {


  const ref = useRef();
  const [arr, setArr] = useState([]);
  const [file, setFile] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    ref.current.click();

    if (e.target.files && e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setArr((pre) => [...pre, URL.createObjectURL(e.target.files[0])]);
    }
  };

  const deletePic = (e, x) => {
    e.preventDefault();
    let filtered = arr.filter((e) => e !== x);
    setArr(filtered);
  };

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

          <div data-testid="react-quill">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              // onChange={(e) => console.log(e)}
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
            <label htmlFor="upload-btn">Upload your Photos</label>
            <button id="upload-btn" onClick={handleClick} data-testid="upload-btn" >
              <img
                src={require("../../Assets/signs/drag-and-drop.png")}
                alt=""
              />
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              name="upload-pics"
              ref={ref}
              onChange={(e) => handleClick(e)}
            />
            <div className="share-story-images">
              {arr &&
                arr.map((x) => (
                  <span>
                    {file && <img src={x} alt="" />}

                    <button onClick={(e) => deletePic(e, x)}>
                      <img
                        src={require("../../Assets/signs/cross.png")}
                        alt=""
                      />
                    </button>
                  </span>
                ))}
            </div>
          </div>
          <div className="share-story-form-btns">
            <NormalButton
              type="cancel"
              name="Cancel"
              className="cancel-form-btn"
            />
            <div>
              <NormalButton
                type="save"
                name="Save"
                className="submit-form-btn"
              />
              <NormalButton
                type="submit"
                name="Submit"
                className="submit-form-btn"
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
