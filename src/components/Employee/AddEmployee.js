import React, { useState } from "react";
import { addEmployee } from "../../services/employeeService";

export default function Addemployee() {
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

    addEmployee(newEmployee).then((response) => {
      const message = response.ok
        ? "Employee insertion successful"
        : "Failed to insert employee";
      alert(message);
      window.location.replace("/empList");
    });
  }

  return (
    <div class="component-body">
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
                  required
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
                    required
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
