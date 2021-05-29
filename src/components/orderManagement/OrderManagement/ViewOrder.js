import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ViewOrder() {

  const { oID } = useParams();

  const [order, setOrderDetails] = useState({});
  const [orderItem, setOrderItemsDetails] = useState({});

  useEffect(() => {
    loadOrder();
  }, []);

  useEffect(() => {
    loadOrderItems();
  }, []);

  const loadOrder = async () => {
    await axios.get(`https://sigiri-furniture-app.herokuapp.com/order/getOrder/${oID}`).then((res) => {
      console.log(res.data);
      setOrderDetails(res.data.order)

    }).catch((error) => {
      alert(error.message);
    })

  };

  const loadOrderItems = async () => {
    await axios.get(`https://sigiri-furniture-app.herokuapp.com/orderItem/getOrderItem/${oID}`).then((res) => {
      console.log(res.data);
      setOrderItemsDetails(res.data.orderItem)

    }).catch((error) => {
      alert(error.message);
    })

  };


  return (

    <div style={{ position: "absolute", top: "15%", left: "30%", width: "50%", height: "95%" }}>
      <div style={{ position: "absolute", top: "-2%", left: "-60%", width: "15%", height: "120%" }}>

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

      <div className="container py-4">
        <center>
          <h3>Order Details</h3></center>
        <hr />
        <div className="container">
          <table class="table table-sm table-dark">
            <tbody>
              <tr>
                <td>Order Id           :</td>
                <td>{order.orderId}</td>
              </tr>
              <tr>
                <td>Customer NIC      :</td>
                <td>{order.cNIC}</td>
              </tr>
              <tr>
                <td>Order Type      :</td>
                <td>{order.type}</td>
              </tr>
              <tr>
                <td>Order Date         :</td>
                <td>{order.oDate}</td>
              </tr>
              <tr>
                <td>Delivery Address   :</td>
                <td>{order.dAddress}</td>
              </tr>
              <tr>
                <td>Additional Charge  :</td>
                <td>{order.additonalCharge}</td>
              </tr>
              <tr>
                <td>Final Price        :</td>
                <td>{order.finalPrice}</td>
              </tr>
              <tr>
                <td>Order status       :</td>
                <td>{order.oStatus}</td>
              </tr>
              <tr>
                <td>Employee Id        :</td>
                <td>{order.oEmpId}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div>

        <div className="container">
          <h6 className="fw-bolder">Product List of the Order</h6>
          <hr />
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">Product Code</th>
                <th scope="col">Quantity</th>
                <th scope="col">Customized Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{orderItem.productId1}</td>
                <td>{orderItem.qty1}</td>
                <td>{orderItem.feature1}</td>
              </tr>
              <tr>
                <td>{orderItem.productId2}</td>
                <td>{orderItem.qty2}</td>
                <td>{orderItem.feature2}</td>
              </tr>
              <tr>
                <td>{orderItem.productId3}</td>
                <td>{orderItem.qty3}</td>
                <td>{orderItem.feature3}</td>
              </tr>
            </tbody>

          </table>
          <Link to={"/displayOrders"}> <button class="text-decoration-none" class="btn btn-warning"> BACK TO ORDERS</button> </Link>
          <Link to={"/order/GenerateOrderReport"}> <button class="text-decoration-none" class="btn btn-info"> BACK TO REPORT</button> </Link>
        </div>



      </div>


    </div>
  );

};
export default ViewOrder;