import React from "react";
import "../admin.css";
import { adminUsrData } from "../../../Data/Data";
import { AdminSearchbar, BorderButton, NormalButton } from "../../../Helper";
import { TitleHead } from "../../../Helper/TitleHead";

export const UserPage = () => {
  return (
    <div>
      <TitleHead title="User" />
      <div className="admin-search-plus">
        <AdminSearchbar />
        <NormalButton isAdd name="Add" className="admin-add-class" />
      </div>

      <table className="admin-user-table" > 
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
          {adminUsrData?.map((data) => (
            <tr key={data.empId}>
              <td>{data.fName}</td>
              <td>{data.lName}</td>
              <td>{data.email}</td>
              <td>{data.empId}</td>
              <td>{data.department}</td>
              <td>{data.stateu}</td>
              <td>
                <button>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
