import React, { Component } from "react";
import { getAttendanceList } from "../../services/attendanceService";

export default class AttendanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceList: null,
      isFetching: false,
    };
  }

  componentDidMount() {
    if (!this.state.attendanceList && !this.state.isFetching) {
      this.setState({ isFetching: true });
      getAttendanceList()
        .then((data) => {
          this.setState({ attendanceList: data.data, isFetching: false });
        })
        .catch(() => this.setState({ isFetching: false }));
    }
  }

  generateTableRows = (attendanceList) => {
    return attendanceList.map((attendance) => {
      return (
        <tr>
          <td>{attendance.userId}</td>
          <td>{new Date(attendance.epochTime).toTimeString()}</td>
        </tr>
      );
    });
  };

  render() {
    const { attendanceList, isFetching } = this.state;
    if (attendanceList) {
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
          <h2 className="text-center">List of Attendance</h2>
          <table class="table table-striped table-dark">
            <tr>
              <th>ID</th>
              <th>In Time</th>
            </tr>
            {this.generateTableRows(attendanceList)}
          </table>
        </div>
      );
    } else if (isFetching) {
      return (
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-grow text-danger mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        /*<div>Loading.....!!!</div>*/
      );
    }
    return <div>No Data Found!</div>;
  }
}
