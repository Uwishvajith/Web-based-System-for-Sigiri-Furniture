import React, { useState } from "react";
import Header from "./Header";
import AddEmployee from "./Employee/AddEmployee";
import RemoveEmployee from "./Employee/removeEmployee";
import UpdateEmployee from "./Employee/updateEmployeeDetails";
import QRMarker from "./attendance/QRMarker";
import AttendanceList from "./attendance/AttendanceList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeList from "./Employee/employeeList";

function Home() {
  /*const [selectedRoute, setSelectedRoute] = useState("add-employee");*/

  return (
    /*<dev>
      <Header onClickHeader={setSelectedRoute} />
      {selectedRoute === "add-employee" && <AddEmployee />}
      {selectedRoute === "remove-employee" && <RemoveEmployee />}
      {selectedRoute === "update-employee" && <UpdateEmployee />}
      {selectedRoute === "attendance" && <QRMarker />}
      {selectedRoute === "attendance-list" && <AttendanceList />}
    </dev>*/
    <Router>
      <div>
        <Header />
        <Route path="/empList" exact component={EmployeeList} />
        <Route path="/addEmp" exact component={AddEmployee} />
        <Route path="/removeEmp" exact component={RemoveEmployee} />
        <Route path="/updateEmp/:userId" exact component={UpdateEmployee} />
        <Route path="/attendaceMark" exact component={QRMarker} />
        <Route path="/attendanceList" exact component={AttendanceList} />
      </div>
    </Router>
  );
}

export default Home;
