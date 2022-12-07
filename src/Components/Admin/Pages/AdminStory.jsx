import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { adminStory } from "../../../Data/Data";
import {
  AdminSearchbar,
  BorderButton,
  CustomModal,
  NormalButton,
  NormalInput,
  NormalSelect,
} from "../../../Helper";
import { TitleHead } from "../../../Helper/TitleHead";

export const AdminStory = () => {
  const [state, setState] = useState(adminStory);
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
        return (
          data.missionTitle
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data.userName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.missionId.toString().includes(e.target.value) ||
          data.userId.toString().includes(e.target.value)
        );
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
          <TitleHead title="User" />
          <div className="admin-search-plus">
            <AdminSearchbar inputChange={handleChange} />
          </div>

          <div className="user-table-div">
            <table className="admin-user-table">
              <thead className="admin-user-table-head">
                <tr>
                  <th>Story Title</th>
                  <th>Full Name</th>
                  <th>Mission Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="admin-user-table-body">
                {state.length ? (
                  state?.map((data) => (
                    <tr key={data.id}>
                      <td>{data.storyTitle}</td>
                      <td>{data.fullName}</td>
                      <td>{data.missionTitle}</td>
                      
                      <td>
                        <button onClick={() => handleEditFun(data.id)}>
                          View1
                        </button>
                        <button onClick={() => handleEditFun(data.id)}>
                          <img
                            src={
                              require("../../../Assets/signs/check.svg").default
                            }
                            alt="edit"
                          />
                        </button>
                        <button onClick={() => handleEditFun(data.id)}>
                          <img
                            src={
                              require("../../../Assets/signs/cancelmark.svg").default
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
                label="First Name"
                value={isEditData?.fName}
                onChange={(e) =>
                  setIsEditData((pre) => ({ ...pre, fName: e.target.value }))
                }
              />
              <NormalInput
                className="admin-edit-title-input"
                label="Last Name"
                value={isEditData?.lName}
                onChange={(e) =>
                  setIsEditData((pre) => ({ ...pre, lName: e.target.value }))
                }
              />
              <NormalInput
                className="admin-edit-title-input"
                label="Email"
                value={isEditData?.email}
                onChange={(e) =>
                  setIsEditData((pre) => ({ ...pre, email: e.target.value }))
                }
              />
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
