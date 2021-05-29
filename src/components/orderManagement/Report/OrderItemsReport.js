import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';

export default function GenerateOrderItemsReport() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    function getOrders() {
      axios.get("https://sigiri-furniture-app.herokuapp.comorderItem/displayOrderItems").then((res) => {
        setOrderItems(res.data.reverse());
      }).catch((error) => {
        alert(error.message);
      })
    }
    getOrders();

  }, [])


  return (
    <div style={{ position: "absolute", top: "15%", left: "20%", width: "70%", height: "100%" }}>
      <div style={{ position: "absolute", top: "-2%", left: "-29.5%", width: "15%", height: "120%" }}>

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

      <div style={{ position: "absolute", top: "6%", left:"-6%", width: "100%", height: "100%" }}>
        <div className="container-fluid" style={{fontWeight:"bold",fontStyle:"italic"}}>
          <MaterialTable style={{background:"#E3ECFF"}}
            title="Order List"
            columns={[
              { title: "Order Id", field: "orderId", type: "string" },
              { title: "Prdt 1", field: "productId1", type: "string" },
              { title: "Qty1", field: "qty1", type: "string" },
              { title: "Ftr 1", field: "feature1", type: "string" },
              { title: "Prdt 2", field: "productId2", type: "string" },
              { title: "Qty 2", field: "qty2", type: "string" },
              { title: "Ftr 2", field: "feature2", type: "string" },
              { title: "Prdt 3", field: "productId3", type: "string" },
              { title: "Qty 3", field: "qty3", type: "string" },
              { title: "Ftr 3", field: "feature3", type: "string" },
            ]}
            data={orderItems}
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