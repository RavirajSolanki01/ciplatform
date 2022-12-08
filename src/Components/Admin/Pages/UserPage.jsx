import React, { useState } from "react";
import "../admin.css";
import { adminUsrData, departmentData, statusData } from "../../../Data/Data";
import {
  AdminSearchbar,
  BorderButton,
  CustomModal,
  NormalButton,
  NormalInput,
  NormalSelect,
} from "../../../Helper";
import { TitleHead } from "../../../Helper/TitleHead";
import ReactPaginate from "react-paginate";

export const UserPage = () => {
  const [state, setState] = useState(adminUsrData);
  const [curData, setCurData] = useState(state);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
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
          data.fName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.lName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.empId.toString().includes(e.target.value.toLowerCase()) ||
          data.department
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data.status.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
    );
  };

  const handleDeleteFun = (e) => {
    setIsOpen(true);
    setDeleteId(e);
  };
  const handleDelete = () => {
    setIsOpen(false);
    setCurData(state.filter((data) => data.id !== deleteId));
    setState(state.filter((data) => data.id !== deleteId));
  };

  const handleEditFun = (id = null) => {
    setDataId((pre) => ({ ...pre, isEdit: true, editId: id }));
    setIsEditData(curData.filter((data) => data.id === id)[0]);
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
                  <th>Fisrt Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Employee Id</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="admin-user-table-body">
                {state.length ? (
                  state?.map((data) => (
                    <tr key={data.empId}>
                      <td>{data.fName}</td>
                      <td>{data.lName}</td>
                      <td>{data.email}</td>
                      <td>{data.empId}</td>
                      <td>{data.department}</td>
                      <td
                        style={{
                          color: data.status === "Active" ? "green" : "red",
                        }}
                      >
                        {data.status}
                      </td>
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

              <div className="admin-edit-status">
                <label htmlFor="">Department</label>
                <NormalSelect
                  items={departmentData}
                  value={isEditData?.department}
                  onChange={(e) =>
                    setIsEditData((pre) => ({
                      ...pre,
                      department: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="admin-edit-status">
                <label htmlFor="">Status</label>
                <NormalSelect
                  items={statusData}
                  value={isEditData?.status}
                  onChange={(e) =>
                    setIsEditData((pre) => ({
                      ...pre,
                      status: e.target.value,
                    }))
                  }
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
