import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllOrders() {

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            searchOrders();

        } else {//normally the fetched order details are here   

            function getOrders() {
                axios.get("https://sigiri-furniture-app.herokuapp.com/order/displayOrders").then((res) => {
                    setOrders(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })
            }
            getOrders();
        }
    }, [])



    const deleteOrder = async orderId => {



        const answer = window.confirm("Are you sure you want to permenantly delete?");

        if (answer) {

            await axios.delete(`https://sigiri-furniture-app.herokuapp.com/orderItem/deleteOrderItem/${orderId}`)
            alert("OrderItems successfully deleted");

            await axios.delete(`https://sigiri-furniture-app.herokuapp.com/order/deleteOrder/${orderId}`)
            alert("Order successfully deleted");

            function getOrders() {
                axios.get("https://sigiri-furniture-app.herokuapp.com/order/displayOrders").then((res) => {
                    setOrders(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })

            }
            getOrders();
        }
    }


    function searchOrders(e) {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {//checking if the value entered at the search box is for NIC or normal name
            axios.get(`https://sigiri-furniture-app.herokuapp.com/order/searchOrders/${search}`).then((res) => {
                setOrders(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {
            axios.get(`https://sigiri-furniture-app.herokuapp.com/order/searchOrdersByOrderId/${search}`).then((res) => {
                setOrders(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
    }


    function refreshPage() {
        window.location.reload();
    }


    return (
        <div style={{ position: "absolute", top: "10%", left: "20%", width: "80%", height: "100%", background: "none", }}>
            <div style={{ position: "absolute", top: "3%", left: "-25%", width: "15%", height: "110%" }}>

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

            <div style={{ position: "absolute", top: "5%", left: "-10%", width: "30%", height: "10%" }}>
                <div class="container">
                    <form onSubmit={searchOrders}>
                        <br></br><br></br>
                        <input className="col-md-8" type="text" name="search" placeholder="Search..."
                            value={search} onChange={(event) => { setSearch(event.target.value) }} required />
                        <button class="fa fa-search btn btn-danger" name="submit" id="submit" value="submit"></button>

                    </form>
                    <div style={{ position: "absolute", top: "67%", left: "81.9%"}}>
                    <button class="fa fa-refresh btn btn-success" name="refresh" id="refresh" onClick={refreshPage}></button></div>
                </div>

            </div>

            <div style={{ position: "absolute", top: "5%", right: "0%", width: "20%", height: "10%", background: "none", }}>

                <Link to="/addOrder"><button className="btn btn-outline-primary "> + PLACE A NEW ORDER </button></Link>

                <br></br> <br></br>
                <center>
                    <Link class="fa fa-file-word-o fa-2x" style={{ fontSize: 48 }} to="/order/GenerateOrderReport"></Link>
                </center>

            </div>

            <div style={{ position: "absolute", top: "20%", left: "-10%", width: "100%", height: "80%", background: "none", }}>

                <center><h3>List of Orders</h3></center>
                <div className="container">
                    <table class="table table-striped table-hover table-sm caption-top">
                        <thead>
                            <tr>
                                <th class="text-center" scope="col">ORDER ID</th>
                                <th class="text-center" scope="col">CUSTOMER</th>
                                <th class="text-center" scope="col">TYPE</th>
                                <th class="text-center" scope="col">FINAL PRICE</th>
                                <th class="text-center" scope="col">STATUS</th>
                                <th class="text-center" scope="col">DATE</th>
                                <th class="text-center" scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((orders) => {
                                return (
                                    <tr>
                                        <td class="text-center">{orders.orderId}</td>
                                        <td class="text-center">{orders.cNIC}</td>
                                        <td class="text-center">{orders.type}</td>
                                        <td class="text-center">{orders.finalPrice}</td>
                                        <td class="text-center">{orders.oStatus}</td>
                                        <td class="text-center">{orders.oDate}</td>
                                        <td class="text-center">
                                            <Link class="fa fa-eye btn btn-primary ml-4" role="button" to={`/order/getOrder/${orders.orderId}`}></Link>
                                            <Link class="fa fa-pencil-square-o btn btn-outline-warning ml-4" to={`/order/update/${orders.orderId}`} role="button"></Link>
                                            <Link class="fa fa-trash btn btn-danger ml-3" onClick={() => deleteOrder(orders.orderId)} role="button"></Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}