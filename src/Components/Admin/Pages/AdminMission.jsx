import React, { useState } from "react";
import "../admin.css";
import ReactPaginate from "react-paginate";
import { missionData, missionTypeData } from "../../../Data/Data";
import {
  AdminSearchbar,
  BorderButton,
  CustomModal,
  NormalButton,
  NormalInput,
  NormalSelect,
} from "../../../Helper";
import { TitleHead } from "../../../Helper/TitleHead";
import moment from "moment";

export const AdminMission = () => {
  const [state, setState] = useState(missionData);
  const [curData, setCurData] = useState(state);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditData, setIsEditData] = useState();
  const [dataId, setDataId] = useState({
    isEdit: false,
    editId: 1,
    deleteId: 1,
  });

  const onSave = () => {
    if (dataId.editId === null) {
      setCurData((pre) => [...pre, isEditData]);
      setState((pre) => [...pre, isEditData]);
    } else {
      setCurData(curData.map((e) => (e.id === dataId.editId ? isEditData : e)));
      setState(curData.map((e) => (e.id === dataId.editId ? isEditData : e)));
    }
    setDataId((pre) => ({ ...pre, isEdit: false }));
  };
  const handleChange = (e) => {
    setState(
      curData.filter((data) => {
        return data.title.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };
  const handleDeleteFun = (e) => {
    setIsOpen(true);
    setDataId((pre) => ({ ...pre, deleteId: e }));
  };
  const handleDelete = () => {
    setIsOpen(false);
    setCurData(state.filter((data) => data.id !== dataId.deleteId));
    setState(state.filter((data) => data.id !== dataId.deleteId));
  };
  const handleEditFun = (id = null) => {
    setDataId((pre) => ({ ...pre, isEdit: true, editId: id }));
    if (id) {
      setIsEditData(curData.filter((data) => data.id === id)[0]);
    }
  };

  // const dateFormate = (date) => {
  //   const str = missionData[0].endDate.split("/");
  //   return new Date(str[2], str[1] - 1, str[0]).toLocaleDateString();
  // };

  return (
    <div>
      {isOpen && (
        <CustomModal
          width="634px"
          title="Confrim Delete"
          isCloseBtn
          closeModal={() => setIsOpen(false)}
        >
          <span className="admin-delete-modal-msg">
            Are you sure you want to delete this item?
          </span>
          <div className="admin-delete-btn-div">
            <BorderButton
              className="admin-delet-cancel-btn"
              name="Cancel"
              btnClick={() => setIsOpen(false)}
            />
            <BorderButton
              className="admin-delet-delete-btn"
              name="Delete"
              btnClick={handleDelete}
            />
          </div>
        </CustomModal>
      )}

      {!dataId?.isEdit ? (
        <>
          <TitleHead title="Mission" />
          <div className="admin-search-plus">
            <AdminSearchbar inputChange={handleChange} />
            <NormalButton
              isAdd
              name="Add"
              className="admin-add-class"
              btnClick={() => handleEditFun()}
            />
          </div>

          <div className="user-table-div">
            <table className="admin-user-table">
              <thead className="admin-user-table-head">
                <tr>
                  <th>Mission Title</th>
                  <th>Mission Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="admin-user-table-body">
                {state.length ? (
                  state?.map((data) => (
                    <tr key={data.id}>
                      <td>{data.title}</td>
                      <td>{data.type}</td>
                      <td>{data.startDate}</td>
                      <td>{data.endDate}</td>
                      <td>
                        <button onClick={() => handleEditFun(data.id)}>
                          <img
                            src={
                              require("../../../Assets/signs/edit.svg").default
                            }
                            alt="edit"
                          />
                        </button>
                        <button onClick={() => handleDeleteFun(data.id)}>
                          <img
                            src={
                              require("../../../Assets/signs/delete.svg")
                                .default
                            }
                            alt="delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>
                      <h4>No data found</h4>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="admin-user-pagination">
            <div>
              <button>{"<<"}</button>
            </div>
            <ReactPaginate
              previousLabel="<"
              nextLabel=">"
              pageCount={5}
              initialPage={0}
              className="pagination"
              nextClassName="next"
              nextLinkClassName="next-link"
              previousClassName="previous-class"
              previousLinkClassName="previous-link"
              pageClassName="page"
              activeClassName="active-page"
              pageLinkClassName="page-link"
              activeLinkClassName="active-link-page"
            />
            <div>
              <button>{">>"}</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="admin-edit-div">
            <div className="admin-edit-title">
              {dataId?.editId ? "Edit" : "Add"}
            </div>
            <div className="admin-edit-layout">
              <NormalInput
                className="admin-edit-title-input"
                label="Mission Title"
                value={isEditData?.title}
                onChange={(e) =>
                  setIsEditData((pre) => ({ ...pre, title: e.target.value }))
                }
              />
              <div className="admin-edit-status">
                <label htmlFor="">Mission Type</label>
                <NormalSelect
                  items={missionTypeData}
                  value={isEditData?.type}
                  onChange={(e) =>
                    setIsEditData((pre) => ({
                      ...pre,
                      type: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="admin-mission-date-div">
                <NormalInput
                  posX="702px"
                  type="date"
                  className="admin-edit-title-input"
                  label="Start Date"
                  // value={isEditData?.startDate}
                  value={moment(isEditData?.startDate).format("DD/MM/YYYY")}
                  onChange={(e) =>
                    setIsEditData((pre) => ({
                      ...pre,
                      startDate: moment(e.target.value).format("DD/MM/YYYY"),
                    }))
                  }
                />
                <NormalInput
                  posX="702px"
                  type="date"
                  className="admin-edit-title-input"
                  label="End Date"
                  value={isEditData?.endDate}
                  // value={moment(isEditData?.endDate).format("DD/MM/YYYY")}
                  onChange={(e) => {
                    setIsEditData((pre) => ({
                      ...pre,
                      endDate: moment(e.target.value).format("DD/MM/YYYY"),
                    }));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="admin-edit-cms-btn">
            <BorderButton
              className="admin-delet-cancel-btn"
              name="Cancel"
              btnClick={() => setDataId((pre) => ({ ...pre, isEdit: false }))}
            />
            <BorderButton
              className="admin-delet-delete-btn"
              name="Save"
              btnClick={onSave}
            />
          </div>
        </>
      )}
    </div>
  );
};
