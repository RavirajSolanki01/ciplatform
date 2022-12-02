import React, { useState } from "react";
import "../admin.css";
import { adminUsrData } from "../../../Data/Data";
import {
  AdminSearchbar,
  BorderButton,
  CustomModal,
  NormalButton,
} from "../../../Helper";
import { TitleHead } from "../../../Helper/TitleHead";
import ReactPaginate from "react-paginate";

export const UserPage = () => {
  const [state, setState] = useState(adminUsrData);
  const [curData, setCurData] = useState(state);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();

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
    setCurData(state.filter((data) => data.empId !== deleteId));
    setState(state.filter((data) => data.empId !== deleteId));
  };

  return (
    <div  className="admin-right-common" >
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
      <TitleHead title="User" />
      <div className="admin-search-plus">
        <AdminSearchbar inputChange={handleChange} />
        <NormalButton isAdd name="Add" className="admin-add-class" />
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
                    <button>
                      <img
                        src={require("../../../Assets/signs/edit.svg").default}
                        alt="edit"
                      />
                    </button>
                    <button onClick={() => handleDeleteFun(data.empId)}>
                      <img
                        src={
                          require("../../../Assets/signs/delete.svg").default
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



    </div>
  );
};
