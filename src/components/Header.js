import React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="#">
        SIGIRI FURNITURES
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item">
            <a className="nav-link" href="/empList">
              Employee List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addEmp">
              Add Employee
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/attendaceMark">
              Attendance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/attendanceList">
              Attendance List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addLeave">
              Add Leave
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/leaveList">
              Leave List
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
