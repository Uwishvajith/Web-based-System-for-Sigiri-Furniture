/**This file contains implementation of Salary page add button function
owned by IT19965550
Walpola S.R.
*/

import React, { Component } from "react";
import axios from "axios";

//create contant for path
const HOST = "http://localhost:8060";

export default class AddSalary extends Component {
  //creating constructor for get values
  constructor(props) {
    super(props);
    this.state = {
      EmpId: "",
      Leaves: "",
      Salary: "",
    };
  }

  //implementation of handleInputChange method
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  //implementing a onSubmit method
  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const { emp, leave, sal } = this.state;

    const data = {
      EmpId: emp,
      Leaves: leave,
      Salary: sal,
    };
    console.log(data);

    //update implementation
    axios.put(`${HOST}/sals/update/${id}`, data).then((res) => {
      if (res.data.success) {
        this.setState({
          EmpId: "",
          Leaves: "",
          Salary: "",
        });
        alert("Add Salary Successfully");
      }
      return {
        ok: false,
      };
    });
  };

  //calling methods
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/sals/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          EmpId: res.data.sals.EmpId,
          Leave: res.sals.sals.Leave,
          Salary: res.sals.sals.Salary,
        });
        console.log(this.state.sals);
      }
    });
  }

  //page body components
  render() {
    return (
      <div id="height">
        <div>
          <div class="area"></div>
          <nav class="main-menu bg-primary">
            <ul>
              <li>
                <a href="/ViewFinancial">
                  <i class="fa fa-home fa-2x"></i>
                  <span class="nav-text">Salary</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/ViewMsg">
                  <i class="fa fa fa-users fa-2x"></i>
                  <span class="nav-text">Messages</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/ViewBills">
                  <i class="fa fa-user-plus fa-2x"></i>
                  <span class="nav-text">Bill Payments</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/ViewPayments">
                  <i class="fa fa-user-plus fa-2x"></i>
                  <span class="nav-text">Other Payments</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/ViewSalary">
                  <i class="fa fa-user-plus fa-2x"></i>
                  <span class="nav-text"> Salary </span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/ViewLedger">
                  <i class="fa fa-user-plus fa-2x"></i>
                  <span class="nav-text"> Ledger </span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
            </ul>

            <ul class="logout">
              <li>
                <a href="#">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">Logout</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Add Salary</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>No of Leaves</lable>
              <input
                type="text"
                className="form-control"
                name="leave"
                placeholder="Ex:2021-01-01"
                value={this.state.leave}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Salary</lable>
              <input
                type="text"
                className="form-control"
                name="sal"
                placeholder="Ex:25000"
                value={this.state.sal}
                onChange={this.handleInputChange}
              />
            </div>

            <button
              className="btn btn-success"
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              &nbsp; Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
