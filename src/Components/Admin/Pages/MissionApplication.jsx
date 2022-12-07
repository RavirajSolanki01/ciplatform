import moment from "moment";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { missionApplication, missionTypeData } from "../../../Data/Data";
import {
  AdminSearchbar,
  BorderButton,
  CustomModal,
  NormalInput,
  NormalSelect,
} from "../../../Helper";
import { TitleHead } from "../../../Helper/TitleHead";

export const MissionApplication = () => {
  const [state, setState] = useState(missionApplication);
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
      <TitleHead title="Mission Application" />
      <div className="admin-search-plus">
        <AdminSearchbar inputChange={handleChange} />
      </div>

      <div className="user-table-div">
        <table className="admin-user-table">
          <thead className="admin-user-table-head">
            <tr>
              <th>Mission Title</th>
              <th>Mission Id</th>
              <th>User Id</th>
              <th>User Name</th>
              <th>Application Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="admin-user-table-body">
            {state.length ? (
              state?.map((data) => (
                <tr key={data.id}>
                  <td>{data.missionTitle}</td>
                  <td>{data.missionId}</td>
                  <td>{data.userId}</td>
                  <td>{data.userName}</td>
                  <td>{data.applicationDate}</td>
                  <td>
                    <button onClick={() => handleEditFun(data.id)}>
                      <img
                        src={require("../../../Assets/signs/check.svg").default}
                        alt="edit"
                      />
                    </button>
                    <button onClick={() => handleDeleteFun(data.id)}>
                      <img
                        src={
                          require("../../../Assets/signs/cancelmark.svg")
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
    </div>
  );
};
