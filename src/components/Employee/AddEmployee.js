import axios from "axios";
import React, { useState, useEffect } from "react";
import { addEmployee } from "../../services/employeeService";

const HOST = "http://localhost:8060";

export default function Addemployee() {
  //get all employee details to validations
  const [employee, setEmployee] = useState("");

  var [fName, setfName] = useState("");
  var [lName, setlName] = useState("");
  var [email, setEmail] = useState("");
  var [nic, setNIC] = useState("");
  var [DOB, setDOB] = useState("");
  var [age, setAge] = useState("");
  var [gender, setGender] = useState("");
  var [maritalStat, setMaritalStat] = useState("");
  var [currAdd, setCurrAdd] = useState("");
  var [permAdd, setPermAdd] = useState("");
  var [mobileNo, setMobileNo] = useState("");
  var [landLine, setLandLine] = useState("");
  var [emgContact, setEmgContact] = useState("");
  var [designation, setDesignation] = useState("");
  var [department, setDepartment] = useState("");
  var [joinedDate, setJoinedDate] = useState("");
  var [workedCompany, setWorkedCompany] = useState("");
  var [yearsOfEx, setYearsOfEx] = useState("");
  var [empPic, setEmpPic] = useState("");
  var [cv, setCV] = useState("");

  //nic validation
  function validation() {
    axios.get(`${HOST}/api/getNic`).then((res) => {
      setEmployee(res.data.data);
    });
  }

  useEffect(() => {
    validation();
  }, []);

  function sendData(e) {
    e.preventDefault();

    const newEmployee = {
      fName,
      lName,
      email,
      nic,
      DOB,
      age,
      gender,
      maritalStat,
      currAdd,
      permAdd,
      mobileNo,
      landLine,
      emgContact,
      designation,
      department,
      joinedDate,
      workedCompany,
      yearsOfEx,
      empPic,
      cv,
    };

    if (nic === employee) {
      alert("Employee exists!");
    } else {
      addEmployee(newEmployee).then((response) => {
        const message = response.ok
          ? "Employee insertion successful"
          : "Failed to insert employee";
        alert(message);
        window.location.replace("/empList");
      });
    }
  }

  function employeedemo(){
    fName = "SI004";
    document.getElementById('fName').value = fName;
    
  }

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
      <h2 className="text-center">Add New Employee</h2>
      <div className="border bg-secondary my-5 mx-5">
        <div className="my-5 mx-5">
          <form onSubmit={sendData}>
            <div className="row">
              <div className="col-md-6">
                <label for="fName">First name:</label>
                <input
                  required
                  id="fName"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(e) => {
                    setfName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label for="lName">Last name:</label>
                <input
                  required
                  id="lName"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(e) => {
                    setlName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="email">e-mail:</label>
                <input
                  required
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label for="NIC">NIC:</label>
                <input
                  required
                  id="nic"
                  type="text"
                  className="form-control"
                  placeholder="NIC"
                  pattern="[0-9]{9}V"
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label for="dob">Date of Birth:</label>
                <input
                  required
                  id="dob"
                  type="date"
                  className="form-control"
                  name="dob"
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="age">Age:</label>
                <input
                  required
                  id="age"
                  type="number"
                  className="form-control"
                  placeholder="Age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-4">
                <label for="gender">Gender:</label>
                <select
                  id="gender"
                  className="form-control"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option id="male">Male</option>
                  <option id="female">Female</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="maritalStatus">Marital Status:</label>
                <select
                  id="maritalStatus"
                  className="form-control"
                  onChange={(e) => {
                    setMaritalStat(e.target.value);
                  }}
                >
                  <option id="married">Married</option>
                  <option id="unmarried">Unmarried</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label for="CurrAdd">Current address:</label>
                <input
                  required
                  id="currAdd"
                  type="text"
                  className="form-control"
                  placeholder="Current address"
                  onChange={(e) => {
                    setCurrAdd(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label for="PermAdd">Permanant address:</label>
                <input
                  required
                  id="permAdd"
                  type="text"
                  className="form-control"
                  placeholder="Permanant address"
                  onChange={(e) => {
                    setPermAdd(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label for="MobileNo">Mobile number:</label>
                <input
                  required
                  id="mobileNo"
                  type="number"
                  className="form-control"
                  placeholder="Mobile number"
                  pattern="[0-9]{9}"
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-4">
                <label for="LandLine">Land line number:</label>
                <input
                  required
                  id="landLine"
                  type="number"
                  className="form-control"
                  placeholder="Land line number"
                  pattern="[0-9]{9}"
                  onChange={(e) => {
                    setLandLine(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-4">
                <label for="emgContact">Emergency contact number:</label>
                <input
                  required
                  id="emgContact"
                  type="number"
                  className="form-control"
                  placeholder="Emergency contact number"
                  onChange={(e) => {
                    setEmgContact(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label for="Designation">Designation:</label>
                <input
                  required
                  id="designation"
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-4">
                <label for="Department">Department:</label>
                <input
                  required
                  id="department"
                  type="text"
                  className="form-control"
                  placeholder="Department"
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-4">
                <label for="joinedDate">Joined Date:</label>
                <input
                  required
                  id="joinedDate"
                  type="date"
                  className="form-control"
                  name="joinedDate"
                  onChange={(e) => {
                    setJoinedDate(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col-md-4">Previous experience(If yes),</div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label for="workedCompany">Worked Company:</label>
                <input
                  required
                  id="workedCompany"
                  type="text"
                  className="form-control"
                  placeholder="Worked Company"
                  onChange={(e) => {
                    setWorkedCompany(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label for="yearsOfEx">Years of Experience:</label>
                <input
                  id="yearsOfEx"
                  type="number"
                  className="form-control"
                  placeholder="Years of Experience"
                  onChange={(e) => {
                    setYearsOfEx(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="empPic">Photo of the employee:</label>
                  <input
                    id="empPic"
                    type="file"
                    className="form-control-file"
                    onChange={(e) => {
                      setEmpPic(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="cv">CV:</label>
                  <input
                    required
                    id="cv"
                    type="file"
                    className="form-control-file"
                    onChange={(e) => {
                      setCV(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col py-3 text-center">
            <button type="button" className="btn btn-primary" onClick={employeedemo}>
                 Fill employee data
                </button>
              </div>
              <div className="col py-3 text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col py-3 text-center">
                <button type="reset" className="btn btn-primary">
                  reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
