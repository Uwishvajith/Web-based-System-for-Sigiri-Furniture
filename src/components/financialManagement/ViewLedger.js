/**This file contains implementation of ledger page 
owned by IT19965550
Walpola S.R.
*/

//importing react and axios
import React, { Component } from "react";
import axios from "axios";

export default class ViewLedger extends Component {
  //creating constructor
  constructor(props) {
    super(props);

    //creating an array to store data
    this.state = {
      posts: [],
      payments: [],
      bills: [],
    };
  }

  //calling the method
  componentDidMount() {
    this.getData();
    this.RetrievePaymentData();
    this.RetrieveBillsData();
  }

  //creting a method for retrieve data from posts table
  getData() {
    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  //creting a method for retrieve data from payments table
  RetrievePaymentData() {
    axios.get("http://localhost:8000/payments").then((res) => {
      if (res.data.success) {
        this.setState({
          payments: res.data.existingPosts,
        });
        console.log(this.state.payments);
      }
    });
  }

  RetrieveBillsData() {
    axios.get("http://localhost:8000/bills").then((res) => {
      if (res.data.success) {
        this.setState({
          bills: res.data.existingPosts,
        });
        console.log(this.state.bills);
      }
    });
  }

  //adding components to the page body
  render() {
    return (
      <div className="container" id="height">
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
        <div class="row">
          <h2 align="center">Ledger</h2>
          <div class="col-sm">
            <table class="table">
              <thead>
                <th scope="col" align="justify">
                  Income
                </th>
              </thead>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">OrderID</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((posts) => (
                  <tr>
                    <td>{posts.Date}</td>
                    <td>{posts.OrderId}</td>
                    <td>{posts.Amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="col-sm">
            <table class="table">
              <thead>
                <th scope="col" align="center">
                  Payments
                </th>
              </thead>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {this.state.payments.map((payments) => (
                  <tr>
                    <td>{payments.Date}</td>
                    <td>{payments.Description}</td>
                    <td>{payments.Amount}</td>
                  </tr>
                ))}
                {this.state.bills.map((bills) => (
                  <tr>
                    <td>{bills.Date}</td>
                    <td>{bills.BillType}</td>
                    <td>{bills.Amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
