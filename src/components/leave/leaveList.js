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
        <div>
          <h2 className="text-center">Leave List</h2>
          <table border="1">
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
