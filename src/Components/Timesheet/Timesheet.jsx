import React, { useState } from "react";
import "./timesheet.css";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Home/HomeElements";
import {
  timesheetGoals,
  timesheetHour,
  timesheetHourData,
} from "../../Data/Data";
import {
  BorderButton,
  CustomModal,
  NormalInput,
  NormalSelect,
} from "../../Helper";
import moment from "moment/moment";

export const Timesheet = () => {
  const [state, setState] = useState(timesheetHour);
  const [goalsData, setGoalsData] = useState(timesheetGoals);
  const [editGoalData, setEditGoalData] = useState();
  const [editHourData, setEditHourData] = useState();
  const [editId, setEditId] = useState();
  const [modal, setModal] = useState({ goal: false, hour: false });
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState({ id: null, type: "" });

  const handleEditFunHour = (id = null) => {
    setModal((pre) => ({ ...pre, hour: true }));
    setEditId(id);
    setEditHourData(state.filter((data) => data.id === id)[0]);
  };
  const handleEditFunGoal = (id = null) => {
    setModal((pre) => ({ ...pre, goal: true }));
    setEditId(id);
    setEditGoalData(goalsData.filter((data) => data.id === id)[0]);
  };

  const onSave = (type) => {
    if (type === "goal") {
      setGoalsData(goalsData.map((e) => (e.id === editId ? editGoalData : e)));
      setModal({ hour: false, goal: false });
    } else {
      setState(state.map((e) => (e.id === editId ? editHourData : e)));
      setModal({ hour: false, goal: false });
    }
  };
  const handleDelete = (data, type) => {
    // setEditId(data);
    setDeleteId({ id: data, type });
    setDeleteModal(true);
  };
  const handleDeleteFun = () => {
    if (deleteId.type === "hour") {
      setState(state.filter((data) => data.id !== deleteId.id));
    } else {
      setGoalsData(state.filter((data) => data.id !== deleteId.id));
    }
    setDeleteModal(false);
  };
  console.log(state, "LLOO");
  return (
    <div className="timesheet-main">
      <Navbar />
      {(modal?.hour || modal?.goal) && (
        <CustomModal
          title={`Please input below Volunteering ${
            modal.goal ? "Goal" : "Hours"
          }`}
          width={1150}
          isCloseBtn
          closeModal={() => setModal({ hour: false, goal: false })}
        >
          <div>
            <NormalSelect
              label="Mission"
              items={timesheetHourData}
              value={modal.goal ? editGoalData?.mission : editHourData?.mission}
              onChange={(e) => {
                if (modal.goal) {
                  setEditGoalData((pre) => ({
                    ...pre,
                    mission: e.target.value,
                  }));
                } else {
                  setEditHourData((pre) => ({
                    ...pre,
                    mission: e.target.value,
                  }));
                }
              }}
            />
            {modal?.goal && (
              <NormalInput
                placeholder="Enter Actions"
                className="timesheet-actions"
                label="Actions"
                value={editGoalData?.action}
                onChange={(e) =>
                  setEditGoalData((pre) => ({
                    ...pre,
                    action: e.target.value,
                  }))
                }
              />
            )}
            {modal?.hour && (
              <NormalInput
                posX="1063px"
                type="date"
                className="timesheet-date-input"
                label="End Date"
                value={editHourData?.date}
                // value={moment(isEditData?.endDate).format("DD/MM/YYYY")}
                onChange={(e) => {
                  setEditHourData((pre) => ({
                    ...pre,
                    date: moment(e.target.value).format("DD/MM/YYYY"),
                  }));
                }}
              />
            )}
            {modal.hour ? (
              <div className="timesheet-hour-min">
                <NormalInput
                  placeholder="Enter Spent Hours"
                  className="timesheet-hour-inp"
                  label="Hours"
                  value={editHourData?.hour}
                  onChange={(e) =>
                    setEditHourData((pre) => ({
                      ...pre,
                      hour: e.target.value,
                    }))
                  }
                />
                <NormalInput
                  placeholder="Enter Spent Minutes"
                  className="timesheet-hour-inp"
                  label="Minutes"
                  value={editHourData?.minute}
                  onChange={(e) =>
                    setEditHourData((pre) => ({
                      ...pre,
                      minute: e.target.value,
                    }))
                  }
                />
              </div>
            ) : modal.goal ? (
              <NormalInput
                posX="1063px"
                type="date"
                className="timesheet-date-input"
                label="Date Volunteered"
                value={editGoalData?.date}
                // value={moment(isEditData?.endDate).format("DD/MM/YYYY")}
                onChange={(e) => {
                  setEditGoalData((pre) => ({
                    ...pre,
                    date: moment(e.target.value).format("DD/MM/YYYY"),
                  }));
                }}
              />
            ) : null}
            <NormalInput
              placeholder="Enter your message"
              inputType="textarea"
              className="timesheet-hour-textarea"
              label="Message"
              value={modal.goal ? editGoalData.message : editHourData.message}
              onChange={(e) => {
                setEditGoalData((pre) => ({
                  ...pre,
                  message: e.target.value,
                }));
                setEditHourData((pre) => ({
                  ...pre,
                  message: e.target.value,
                }));
              }}
            />
            <div className="timesheet-hour-btn">
              <BorderButton
                className="admin-delet-cancel-btn"
                name="Cancel"
                btnClick={() => setModal({ hour: false, goal: false })}
              />
              <BorderButton
                className="admin-delet-delete-btn"
                name="Submit"
                btnClick={() =>
                  modal.goal
                    ? onSave("goal")
                    : modal.hour
                    ? onSave("hour")
                    : null
                }
              />
            </div>
          </div>
        </CustomModal>
      )}
      {deleteModal && (
        <CustomModal
          width="634px"
          title="Confrim Delete"
          isCloseBtn
          closeModal={() => setDeleteModal(false)}
        >
          <span className="admin-delete-modal-msg">
            Are you sure you want to delete this item?
          </span>
          <div className="admin-delete-btn-div">
            <BorderButton
              className="admin-delet-cancel-btn"
              name="Cancel"
              btnClick={() => setDeleteModal(false)}
            />
            <BorderButton
              className="admin-delet-delete-btn"
              name="Delete"
              btnClick={handleDeleteFun}
            />
          </div>
        </CustomModal>
      )}
      <div className="timesheet-div-outer">
        <div className="timesheet-div">
          <span className="timesheet-title">Volunteering Timesheet</span>
          <div className="timesheet-box">
            <div className="timesheet-left">
              <span>Volunteering Hours</span>
              <table className="timesheet-table">
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
                  {state.length ? (
                    state.map((data) => (
                      <tr key={data.id}>
                        <td>{data.mission}</td>
                        <td>{data.date}</td>
                        <td>{data.hour}h</td>
                        <td>{data.minute}min</td>
                        <td>
                          <button
                            onClick={() => handleEditFunHour(data.id)}
                            className="timesheet-edit-btn"
                          >
                            <img
                              src={
                                require("../../Assets/signs/edit.svg").default
                              }
                              alt="edit"
                            />
                          </button>
                          <button
                            onClick={() => handleDelete(data.id, "hour")}
                            className="timesheet-edit-btn"
                          >
                            <img
                              src={
                                require("../../Assets/signs/delete.svg").default
                              }
                              alt="delete"
                            />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <h4>No data found</h4>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="timesheet-right">
              <span>Volunteering Goals</span>
              <table className="timesheet-table">
                <thead>
                  <tr>
                    <th>Mission</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {goalsData.length ? (
                    goalsData.map((data) => (
                      <tr kay={data.id}>
                        <td>{data.mission}</td>
                        <td>{data.date}</td>
                        <td>{data.action}</td>
                        <td>
                          <button
                            onClick={() => handleEditFunGoal(data.id)}
                            className="timesheet-edit-btn"
                          >
                            <img
                              src={
                                require("../../Assets/signs/edit.svg").default
                              }
                              alt="edit"
                            />
                          </button>
                          <button
                            onClick={() => handleDelete(data.id)}
                            className="timesheet-edit-btn"
                          >
                            <img
                              src={
                                require("../../Assets/signs/delete.svg").default
                              }
                              alt="delete"
                            />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4}>
                        <h4>No data found</h4>
                      </td>
                    </tr>
                  )}
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
