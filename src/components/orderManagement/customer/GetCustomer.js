import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function DisplayCustomer() {

  const { nic } = useParams();

  const [customer, setCustomerProfile] = useState({});

  useEffect(() => {
    loadCustomer();
  }, []);


  const loadCustomer = async () => {
    await axios.get(`http://localhost:8060/customer/get/${nic}`).then((res) => {
      console.log(res.data);
      setCustomerProfile(res.data.customer)

    }).catch((error) => {
      alert(error.message);
    })

  };


  return (

    <div style={{ position: "absolute", top: "15%", left: "30%", width: "50%", height: "95%" }}>
      <div style={{ position: "absolute", top: "-2%", left: "-60%", width: "15%", height: "110.5%" }}>

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
          <h3 className="display-4">.....Customer Profile.....</h3></center>
        <hr />
        <div className="container py-4">
          <table class="table table-sm table-dark">
            <tbody>
              <tr>
                <td>Customer NIC: </td>
                <td>{customer.NIC}</td>
              </tr>
              <tr>
                <td>Name    :</td>
                <td>{customer.name}</td>
              </tr>
              <tr>
                <td>Organization    :</td>
                <td>{customer.organization}</td>
              </tr>
              <tr>
                <td>Address       :</td>
                <td>{customer.address}</td>
              </tr>
              <tr>
                <td>Phone  :</td>
                <td>{customer.contactNo}</td>
              </tr>
              <tr>
                <td>Email  :</td>
                <td>{customer.email}</td>
              </tr>
              <tr>
                <td>Registration Date  :</td>
                <td>{customer.regDate}</td>
              </tr>
              <tr>
                <td>Employee Id       :</td>
                <td>{customer.empId}</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>



      <Link to="/allCustomer"> <button class="text-decoration-none" class="btn btn-danger btn-lg"> BACK</button> </Link>

    </div>
  );

};
export default DisplayCustomer;
