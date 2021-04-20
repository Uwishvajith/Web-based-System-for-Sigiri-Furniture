import React from "react";
import QrReader from "react-qr-reader";
import { markAttendance } from "../../services/attendanceService";

export default function QRMarker() {
  let isMarked = false;
  const handleScan = async (data) => {
    if (!isMarked && data) {
      isMarked = true;
      console.log("User Signed In Request Initiated!");
      await markAttendance(data.trim());
      console.log("User Signed In Request Completed!");
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
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
      <h2 className="qr-txt text-center">Place Your QR Code Here</h2>
      <div class="qrReader">
        <QrReader
          class="qrReader"
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
}
