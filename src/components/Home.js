import Header from "./Header";
import AddEmployee from "./Employee/AddEmployee";
import RemoveEmployee from "./Employee/removeEmployee";
import UpdateEmployee from "./Employee/updateEmployeeDetails";
import QRMarker from "./attendance/QRMarker";
import AttendanceList from "./attendance/AttendanceList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeList from "./Employee/employeeList";
import addNewLeave from "./leave/addLeave";
import LeaveList from "./leave/leaveList";

function Home() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/empList" exact component={EmployeeList} />
        <Route path="/addEmp" exact component={AddEmployee} />
        <Route path="/removeEmp" exact component={RemoveEmployee} />
        <Route path="/updateEmp/:userId" exact component={UpdateEmployee} />
        <Route path="/attendaceMark" exact component={QRMarker} />
        <Route path="/attendanceList" exact component={AttendanceList} />
        <Route path="/addLeave" exact component={addNewLeave} />
        <Route path="/leaveList" exact component={LeaveList} />
      </div>
    </Router>
  );
}

export default Home;
