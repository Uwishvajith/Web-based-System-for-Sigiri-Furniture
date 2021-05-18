import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEmployee } from "../../services/employeeService";

export default function ViewEmpDetails(props) {
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
      setlName(response.data.LastName);
      setEmail(response.data.eMail);
      setNIC(response.data.NIC);
      setDOB(response.data.DOB);
      setAge(response.data.Age);
      setGender(response.data.Gender);
      setMaritalStat(response.data.MaritalStatus);
      setCurrAdd(response.data.CurrentAddress);
      setPermAdd(response.data.PermanentAddress);
      setMobileNo(response.data.MobileNumber);
      setLandLine(response.data.LandLineNumber);
      setEmgContact(response.data.EmergencyContact);
      setDesignation(response.data.Designation);
      setDepartment(response.data.Department);
      setJoinedDate(response.data.JoinedDate);
      setWorkedCompany(response.data.PreviouslyWorkedCompany);
      setYearsOfEx(response.data.YearsOfExperiance);
      setEmpPic(response.data.EmployeePicture);
      setCV(response.data.CV);
    });
  }, [props.match.params.userId]);

  const [userId, setUserId] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNIC] = useState("");
  const [dob, setDOB] = useState();
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
  const [yearsOfEx, setYearsOfEx] = useState("");
  const [workedCompany, setWorkedCompany] = useState("");
  const [empPic, setEmpPic] = useState("");
  const [cv, setCV] = useState("");

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
      <a href="/empList" class="float-right mb-3 mr-3">
        <button class="btn btn-sm btn-outline-primary">close</button>
      </a>
      <table class="table table-striped" style={{ background: "#E3ECFF" }}>
        <tbody>
          <tr>
            <th class="text-left" scope="row">
              Employee ID
            </th>
            <td class="text-left">{userId}</td>
          </tr>
          <tr></tr>
          <tr>
            <th class="text-left" scope="row">
              First Name
            </th>
            <td class="text-left">{fName}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Last Name
            </th>
            <td class="text-left">{lName}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              e-mail
            </th>
            <td class="text-left">{email}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              NIC
            </th>
            <td class="text-left">{nic}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Date of Birth
            </th>
            <td class="text-left">{dob}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Age
            </th>
            <td class="text-left">{age}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Gender
            </th>
            <td class="text-left">{gender}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Marital Status
            </th>
            <td class="text-left">{maritalStat}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Current Address
            </th>
            <td class="text-left">{currAdd}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Permenant Address
            </th>
            <td class="text-left">{[permAdd]}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Mobile Number
            </th>
            <td class="text-left">{mobileNo}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Land Line Number
            </th>
            <td class="text-left">{landLine}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Emergency Contact Number
            </th>
            <td class="text-left">{emgContact}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Designation
            </th>
            <td class="text-left">{designation}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Department
            </th>
            <td class="text-left">{department}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Joined Date
            </th>
            <td class="text-left">{joinedDate}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Worked Company
            </th>
            <td class="text-left">{workedCompany}</td>
          </tr>
          <tr>
            <th class="text-left" scope="row">
              Years of Experiance
            </th>
            <td class="text-left">{yearsOfEx}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
