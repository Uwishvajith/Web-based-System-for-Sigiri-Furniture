/**This file contains implementation of bills details page 
owned by IT19965550
Walpola S.R.
*/

//importing react and axios
import React, { Component } from "react";
import axios from "axios";

export default class ViewBills extends Component {
  //creating constructor
  constructor(props) {
    super(props);

    //creating an array to store data
    this.state = {
      bills: [],
    };
  }

  //calling the method
  componentDidMount() {
    this.getData();
  }

  //creting a method for retrieve data
  getData() {
    axios.get("http://localhost:8000/bills").then((res) => {
      if (res.data.success) {
        this.setState({
          bills: res.data.existingPosts,
        });
        var x = this.state.bills[0].Amount;
        console.log(this.state.bills);
        console.log(x);
      }
    });
  }

  //function declarion for delete
  onDelete = (id) => {
    axios.delete(`http://localhost:8000/bills/delete/${id}`).then((res) => {
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
        <div>
          <h2 align="center">Bill Details</h2>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">BillType</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.bills.map((bills, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{bills.BillType}</td>
                <td>{bills.Date}</td>
                <td>{bills.Amount}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${bills._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(bills._id)}
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
            href="/AddBillDetails"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Add Bill details
          </a>
        </button>
      </div>
    );
  }
}
