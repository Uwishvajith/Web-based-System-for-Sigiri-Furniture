import React, { Component } from "react";

import {
  getAllEmployees,
  deleteEmployee,
} from "../../services/employeeService";
import { Redirect } from "react-router";

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeeList: null,
      isFetching: false,
      redirect: null,
    };
  }

  componentDidMount() {
    if (!this.state.EmployeeList && !this.state.isFetching) {
      this.setState({ isFetching: true });
      getAllEmployees()
        .then((data) => {
          this.setState({ EmployeeList: data.data, isFetching: false });
        })
        .catch(() => this.setState({ isFetching: false }));
    }
  }

  componentDidUpdate() {
    if (!this.state.EmployeeList && !this.state.isFetching) {
      this.setState({ isFetching: true });
      getAllEmployees()
        .then((data) => {
          this.setState({ EmployeeList: data.data, isFetching: false });
        })
        .catch(() => this.setState({ isFetching: false }));
    }
  }

  handleUpdateOnClick(userId) {
    console.log(userId, "<<<<<<<<<<<<<<<<<");
    this.setState({ redirect: `/updateEmp/${userId}` });
  }

  handleDeleteOnClick(userId) {
    const isApproved = window.confirm(
      "Do you really want to delete this user?"
    );
    if (isApproved) {
      deleteEmployee(userId).then((response) => {
        const message = response.ok
          ? "Employee deletion successful"
          : "Failed to delete employee";
        this.setState({ EmployeeList: null });
        alert(message);
      });
    }
  }

  generateTableRows = (EmployeeList) => {
    return EmployeeList.map((employee) => {
      return (
        <tbody>
          <tr>
            <td>{employee.userId}</td>
            <td>{employee.FirstName}</td>
            <td>{employee.LastName}</td>
            <td>{employee.eMail}</td>
            <td>{employee.NIC}</td>
            <td>{employee.DOB}</td>
            <td>{employee.Age}</td>
            <td>{employee.Gender}</td>
            <td>{employee.MaritalStatus}</td>
            <td>{employee.CurrentAddress}</td>
            <td>{employee.PermanentAddress}</td>
            <td>{employee.MobileNumber}</td>
            <td>{employee.LandLineNumber}</td>
            <td>{employee.EmergencyContact}</td>
            <td>{employee.Designation}</td>
            <td>{employee.Department}</td>
            <td>{employee.JoinedDate}</td>
            <td>{employee.PreviouslyWorkedCompany}</td>
            <td>{employee.YearsOfExperiance}</td>
            <td>{employee.EmployeePicture}</td>
            <td>{employee.CV}</td>
            <td>
              <button onClick={() => this.handleUpdateOnClick(employee.userId)}>
                update
              </button>
              <button onClick={() => this.handleDeleteOnClick(employee.userId)}>
                delete
              </button>
            </td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    const { EmployeeList, isFetching, redirect } = this.state;
    if (redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    if (EmployeeList) {
      return (
        <div>
          <h2 className="text-center">Employee List</h2>
          <table border="1">
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>e-mail</th>
              <th>NIC</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Marital Status</th>
              <th>Current Address</th>
              <th>Permanent Address</th>
              <th>Mobile Number</th>
              <th>Land Line Number</th>
              <th>Emergency Contact Number</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Joined Date</th>
              <th>Previosly Worked Company</th>
              <th>Years Of Experiance</th>
              <th>Employee Picture</th>
              <th>CV</th>
              <th>operation</th>
            </tr>
            {this.generateTableRows(EmployeeList)}
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
