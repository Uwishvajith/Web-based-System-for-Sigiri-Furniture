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
        <div>
          <table>
            <tr>
              <th>ID</th>
              <th>Time</th>
            </tr>
            {this.generateTableRows(attendanceList)}
          </table>
        </div>
      );
    } else if (isFetching) {
      return <div>Loading.....!!!</div>;
    }
    return <div>No Data Found!</div>;
  }
}
