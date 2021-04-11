import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEmployee, updateEmployee } from "../../services/employeeService";

const HOST = "http://localhost:4000";

export default function UpdateEmployee(props) {
  useEffect(() => {
    const {
      match: { params },
    } = props;
    console.log(params.userId, "<<<");
    const userId = params.userId;
    getEmployee(userId).then((response) => {
      console.log(response, "<<<<");
      setUserId(response.data.userId);
      setfName(response.data.FirstName);
    });
  }, [props.match.params.userId]);

  const [userId, setUserId] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStat, setMaritalStat] = useState("");
  const [currAdd, setCurrAdd] = useState("");
  const [permAdd, setPermAdd] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [landLine, setLandLine] = useState("");
  const [emgContact, setEmgContact] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [workedCompany, setWorkedCompany] = useState("");
  const [yearsOfEx, setYearsOfEx] = useState("");
  const [empPic, setEmpPic] = useState("");
  const [cv, setCV] = useState("");

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

    updateEmployee(userId, newEmployee).then((response) => {
      const message = response.ok
        ? "Employee insertion successful"
        : "Failed to insert employee";
      alert(message);
    });
  }

  return (
    <div className="border bg-light my-5 mx-5">
      <div className="my-5 mx-5">
        <form onSubmit={sendData}>
          <div className="row">
            <div className="col-md-6">
              <label for="fName">First name:</label>
              <input
                value={fName}
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
                id="email"
                type="email"
                className="form-control"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label for="NIC">NIC:</label>
              <input
                id="nic"
                type="text"
                className="form-control"
                placeholder="NIC"
                onChange={(e) => {
                  setNIC(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label for="dob">Date of Birth:</label>
              <input
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
                id="mobileNo"
                type="number"
                className="form-control"
                placeholder="Mobile number"
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label for="LandLine">Land line number:</label>
              <input
                id="landLine"
                type="number"
                className="form-control"
                placeholder="Land line number"
                onChange={(e) => {
                  setLandLine(e.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label for="emgContact">Emergency contact number:</label>
              <input
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
  );
}
