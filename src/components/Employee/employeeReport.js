import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";

export default function EmpListReport() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://sigiri-furniture-app.herokuapp.com/api/employeeData")
      .then((res) => {
        setEmployee(res.data);
        console.log("Data has been received");
        console.log(res.data);
      })
      .catch(() => {
        alert("Error while fetching data");
      });
  }, []);

  return (
    <div class="component-body">
      <div>
        <div class="area"></div>
        <nav class="main-menu bg-primary fixed-top">
          <ul>
            <li>
              <a href="/empList">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">Home</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/empList">
                <i class="fa fa-users fa-2x"></i>
                <span class="nav-text">View Employee List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/addEmp">
                <i class="fa fa-user-plus fa-2x"></i>
                <span class="nav-text">Add New Employee</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <a href="/leaveList">
                <i class="fa fa-calendar fa-2x"></i>
                <span class="nav-text">View Leave List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/addLeave">
                <i class="fa fa-calendar-plus-o fa-2x"></i>
                <span class="nav-text">Add Leave Details</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <a href="/attendaceMark">
                <i class="fa fa-edit fa-2x"></i>
                <span class="nav-text">Mark Attendance</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/attendanceList">
                <i class="fa fa-tasks fa-2x"></i>
                <span class="nav-text">View Attendance List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
          </ul>

          <ul class="logout">
            <li>
              <a href="/">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-fluid">
        <MaterialTable
          style={{ background: "#E3ECFF" }}
          title="Details of Current Employees"
          columns={[
            {
              title: "First Name",
              field: "FirstName",
              type: "string",
            },
            { title: "Last Name", field: "LastName", type: "string" },
            { title: "e-mail", field: "eMail", type: "string" },
            { title: "NIC", field: "NIC", type: "string" },
            { title: "Age", field: "Age", type: "number" },
            /*{ title: "Gender", field: "Gender", type: "string" },
            { title: "Marital Status", field: "MaritalStatus", type: "string" },
            {
              title: "Current Address",
              field: "CurrentAddress",
              type: "string",
            },
            {
              title: "Permanant Address",
              field: "PermanentAddress",
              type: "string",
            },
            */ { title: "Mobile No", field: "MobileNumber", type: "number" },
            {
              title: "Emergency Contact",
              field: "EmergencyContact",
              type: "number",
            },
            { title: "Designation", field: "Designation", type: "string" },
            { title: "Department", field: "Department", type: "string" },
            { title: "Joined Date", field: "JoinedDate", type: "string" },
          ]}
          data={employee}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
      </div>
    </div>
  );
}
