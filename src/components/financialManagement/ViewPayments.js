/**This file contains implementation of payments details page 
owned by IT19965550
Walpola S.R.
*/

//importing react and axios
import React, { Component } from "react";
import axios from "axios";

export default class ViewPayments extends Component {
  //creating constructor
  constructor(props) {
    super(props);

    //creating an array to store data
    this.state = {
      payments: [],
    };
  }

  //calling the method
  componentDidMount() {
    this.getData();
  }

  //creting a method for retrieve data
  getData() {
    axios.get("http://localhost:8000/payments").then((res) => {
      if (res.data.success) {
        this.setState({
          payments: res.data.existingPosts,
        });
        console.log(this.state.payments);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/payments/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.getData();
    });
  };

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
        <h2 align="center">Payments Details</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.payments.map((payments, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{payments.Description}</td>
                <td>{payments.Date}</td>
                <td>{payments.Amount}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/update/${payments._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(payments._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <a
            href="/AddPayment"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add Payment Details
          </a>
        </button>
      </div>
    );
  }
}
