import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

export default function GenerateCustomerReport() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    function getCustomers() {
      axios
        .get("http://sigiri-furniture-app.herokuapp.com/customer/")
        .then((res) => {
          setCustomers(res.data.reverse());
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    getCustomers();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "20%",
        width: "70%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-2%",
          left: "-29.5%",
          width: "15%",
          height: "120%",
        }}
      >
        <nav class="main-menu bg-primary">
          <ul>
            <li class="has-subnav">
              <Link to="/allCustomer">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">Home</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/allCustomer">
                <i class="fa fa fa-users fa-2x"></i>
                <span class="nav-text">Customer List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/addCustomer">
                <i class="fa fa-user-plus fa-2x"></i>
                <span class="nav-text">Add New Customer</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <Link to="/displayOrders">
                <i class="fa fa-table fa-2x"></i>
                <span class="nav-text">Order List</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/addOrder">
                <i class="fa fa-plus-circle fa-2x"></i>
                <span class="nav-text">Add New Order</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <hr></hr>
            <li class="has-subnav">
              <Link to="/order/GenerateOrderReport">
                <i class="fa fa-file-pdf-o fa-2x"></i>
                <span class="nav-text">Order Report</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/order/GenerateOrderItemsReport">
                <i class="fa fa-file-pdf-o fa-2x"></i>
                <span class="nav-text">Order Items Report</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/order/GenerateCustomerReport">
                <i class="fa fa-file-pdf-o fa-2x"></i>
                <span class="nav-text">Customer Report</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
          </ul>
          <ul class="logout">
            <li>
            <Link to="/">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        style={{
          position: "absolute",
          left:"-6%",
          top: "6%",
          width: "100%",
          height: "100%",
          
        }}
      >
        <div className="container-fluid" style={{fontStyle:"italic"}}>
          <MaterialTable style={{background:"#E3ECFF"}}
            title="Customer List"
            columns={[
              { title: "Customer NIC", field: "NIC", type: "string" },
              { title: "Name", field: "name", type: "string" },
              { title: "Phone", field: "contactNo", type: Number },
              { title: "Email Address", field: "email", type: "string" },
              { title: "Register Date", field: "regDate", type: "string" },
            ]}
            data={customers}
            options={{
              sorting: true,
              actionsColumnIndex: -1,
              exportButton: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
