import React, { useState } from "react";
import "./timesheet.css";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Home/HomeElements";
import { timesheetHour } from "../../Data/Data";

export const Timesheet = () => {
  const [state, setState] = useState(timesheetHour);

  return (
    <div className="timesheet-main">
      <Navbar />
      <div className="timesheet-div-outer">
        <div className="timesheet-div">
          <span className="timesheet-title">Volunteering Timesheet</span>
          <div className="timesheet-box">
            <div className="timesheet-left">
              <span>Volunteering Hours</span>
              <table className="timesheet-table" >
                <thead>
                  <tr>
                    <th>Mission</th>
                    <th>Date</th>
                    <th>Hours</th>
                    <th>Minutes</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {state.map((data) => (
                    <tr key={data.id} >
                      <td>{data.mission}</td>
                      <td>{data.date}</td>
                      <td>{data.hour}h</td>
                      <td>{data.minute}min</td>
                      <td>
                        <button className="timesheet-edit-btn">
                          <img
                            src={require("../../Assets/signs/edit.svg").default}
                            alt="edit"
                          />
                        </button>
                        <button className="timesheet-edit-btn">
                          <img
                            src={
                              require("../../Assets/signs/delete.svg").default
                            }
                            alt="delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="timesheet-right">
              <span>Volunteering Goals</span>
              <table>
                <thead>
                  <tr>
                    <th>Mission</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Environment Conservation</td>
                    <td>22/02/2022</td>
                    <td>
                      <button className="timesheet-edit-btn">
                        <img
                          src={require("../../Assets/signs/edit.svg").default}
                          alt="edit"
                        />
                      </button>
                      <button className="timesheet-edit-btn">
                        <img
                          src={require("../../Assets/signs/delete.svg").default}
                          alt="delete"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
