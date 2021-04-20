import React, { Component } from "react";

import { getAllleaves } from "../../services/leaveService";
import { Redirect } from "react-router";

export default class LeaveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LeaveList: null,
      isFetching: false,
      redirect: null,
    };
  }

  componentDidMount() {
    if (!this.state.LeaveList && !this.state.isFetching) {
      this.setState({ isFetching: true });
      getAllleaves()
        .then((data) => {
          this.setState({ LeaveList: data.data, isFetching: false });
        })
        .catch(() => this.setState({ isFetching: false }));
    }
  }
  generateTableRows = (LeaveList) => {
    return LeaveList.map((leave) => {
      return (
        <tbody>
          <tr>
            <td>{leave.FirstName}</td>
            <td>{leave.LastName}</td>
            <td>{leave.from}</td>
            <td>{leave.to}</td>
            <td>{leave.days}</td>
            <td>{leave.reason}</td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    const { LeaveList, isFetching, redirect } = this.state;
    if (redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    if (LeaveList) {
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
          <h2 className="text-center">Leave Details List</h2>
          <table class="table table-striped table-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>from</th>
              <th>to</th>
              <th>days</th>
              <th>reason</th>
            </tr>
            {this.generateTableRows(LeaveList)}
          </table>
        </div>
      );
    } else if (isFetching) {
      return (
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-grow text-primary mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
      /*<div>Loading.....!!!</div>*/
    }
    return <div>No Data Found!</div>;
  }
}
