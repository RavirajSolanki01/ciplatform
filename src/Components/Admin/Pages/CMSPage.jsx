import React, { useState } from "react";
import "../admin.css";
import ReactPaginate from "react-paginate";
import { cmsData, dropdowndata, formats, modules } from "../../../Data/Data";
import {
  AdminSearchbar,
  BorderButton,
  CustomModal,
  NormalButton,
  NormalInput,
  NormalSelect,
} from "../../../Helper";
import { TitleHead } from "../../../Helper/TitleHead";
import ReactQuill from "react-quill";

export const CMSPage = () => {
  const [state, setState] = useState(cmsData);
  const [curData, setCurData] = useState(state);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const handleChange = (e) => {
    setState(
      curData.filter((data) => {
        return data.title.toLowerCase().includes(e.target.value.toLowerCase());
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

      {isEdit ? (
        <>
          <TitleHead title="CMS Page" />
          <div className="admin-search-plus">
            <AdminSearchbar inputChange={handleChange} />
            <NormalButton
              isAdd
              name="Add"
              className="admin-add-class"
              // btnClick={() => setIsOpen(true)}
            />
          </div>

          <div className="user-table-div">
            <table className="admin-user-table">
              <thead className="admin-user-table-head">
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="admin-user-table-body">
                {state.length ? (
                  state?.map((data) => (
                    <tr key={data.id}>
                      <td>{data.title}</td>
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
        <div className="admin-edit-div">
          <div className="admin-edit-title">Add</div>
          <div className="admin-edit-layout">
            <NormalInput className="admin-edit-title-input" label="Title" />
            <div className="admin-edit-quill">
              <label htmlFor="description">Description</label>
              <ReactQuill
                id="description"
                theme="snow"
                modules={modules}
                formats={formats}
                // onChange={(e) => console.log(e)}
                className="share-story-quill"
              />
            </div>
            <NormalInput className="admin-edit-title-input" label="Slug" />
            <div className="admin-edit-status" >
              <label htmlFor="">Status</label>
              <NormalSelect items={dropdowndata} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
