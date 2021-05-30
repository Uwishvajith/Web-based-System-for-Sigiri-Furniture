/**This file contains implementation of bills details page add button function
owned by IT19965550
Walpola S.R.
*/

import React, { Component } from "react";
import axios from "axios";

//create contant for path
const HOST = "http://sigiri-furniture-app.herokuapp.com";

export default class AddBillDetails extends Component {
  
  
  //creating constructor for get values
  constructor(props) {
    super(props);
    this.state = {
      BillType: "",
      Date: "",
      Amount: "",
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
    const { topic, day, price } = this.state;

    const data = {
      BillType: topic,
      Date: day,
      Amount: price,
    };
    console.log(data);

    //create implementation
    axios.post(`${HOST}/bills/save`, data).then((res) => {
      if (res.data.success) {
        this.setState({
          BillType: "",
          Date: "",
          Amount: "",
        });
        alert("Data Added Successfully!");
      }
       return {  
               
         ok: false,        
       };      
    });
  };

  //page body components
  render() {
    return (
      <div id="height">
        <div>
          <div class="area"></div>
          <nav class="main-menu bg-primary">
            <ul>
              
              <li class="has-subnav">
                <a href="/ViewFinancial">
                  <i class="fa fa fa-users fa-2x"></i>
                  <span class="nav-text">Daily Income</span>
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

        {/* Data input Form */}
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Add Bill Details</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Bill Type</lable>
              <input
                type="text"
                class="form-control"
                name="topic"
                placeholder="Ex:Electricity"
                pattern="[A-Za-z ]{3,20}"
                title="Bill type must be between 3 to 20 characters in length and contain only Alphabats"
                required
                value={this.state.topic}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Date</lable>
              <input
                type="date"
                className="form-control"
                name="day"
                value={this.state.day}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Amount</lable>
              <input
                type="text"
                className="form-control"
                name="price"
                placeholder="Ex:25000" required
                pattern="[0-9]{1,20}"
                title="Amount must be a number"      
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </div>

            <button
              className="btn btn-success"
              type="submit"
              style={{ marginTop: "15px" }}
            >
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
