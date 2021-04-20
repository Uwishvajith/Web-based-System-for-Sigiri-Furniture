import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function AllCustomers() {

    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        if (document.getElementById('submit').clicked) {//this get executed if we are specifically searching
            searchCustomers();



        } else { //normally the fetched customer details are here   

            function getCustomers() {
                axios.get("http://localhost:8090/customer/").then((res) => {
                    setCustomers(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })
            }
            getCustomers();


        }
    }, [])


    function searchCustomers(e) {
        e.preventDefault();
        if (!isNaN(search.charAt(0))) {//checking if the value entered at the search box is for NIC or normal name
            axios.get(`http://localhost:8090/customer/searchCustomer/${search}`).then((res) => {
                setCustomers(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        } else {

            axios.get(`http://localhost:8090/customer/searchCustomerByName/${search}`).then((res) => {
                setCustomers(res.data);
            }).catch((error) => {
                alert(error.message);
            })
        }
    }


    const deleteCustomer = async NIC => {

        const answer = window.confirm("Are you sure you want to permenantly delete?");

        if (answer) {

            await axios.delete(`http://localhost:8090/customer/delete/${NIC}`);
            alert(`Permenantly deleted the customer ${NIC}`);

            function getCustomers() {
                axios.get("http://localhost:8090/customer/").then((res) => {
                    setCustomers(res.data.reverse());
                }).catch((error) => {
                    alert(error.message);
                })
            }
            getCustomers();
        }
    }

    function refreshPage() {
        window.location.reload();
    }




    return (


        <div style={{ position: "absolute", top: "10%", left: "20%", width: "80%", height: "100%", background: "none", }}>


            <div style={{ position: "absolute", top: "5%", left: "-10%", width: "30%", height: "10%" }}>
                <div class="container">
                    <form onSubmit={searchCustomers}>
                        <br></br><br></br>
                        <input className="col-md-8" type="text" name="search" placeholder="Search..."
                            value={search} onChange={(event) => { setSearch(event.target.value) }} required />
                        <button class="btn btn-danger" name="submit" id="submit" value="submit">Go</button>

                    </form>
                    <button class="btn btn-success" name="refresh" id="refresh" onClick={refreshPage}>Refresh</button>
                </div>

            </div>

            <div style={{ position: "absolute", top: "5%", right: "0%", width: "20%", height: "10%", background: "none" }}>

                <Link to="/addCustomer"><button className="btn btn-outline-primary "> + ADD NEW CUSTOMER</button></Link>
                <br></br> <br></br>
                <center>
                    <Link class="fa fa-file-word-o fa-2x" style={{ fontSize: 48 }} to="/order/GenerateCustomerReport"></Link>
                </center>
            </div>

            <div style={{ position: "absolute", top: "3%", left: "-25%", width: "15%", height: "100%" }}>

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
                            <a href="#">
                                <i class="fa fa-power-off fa-2x"></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </nav>



            </div>
            <div style={{ position: "absolute", top: "20%", left: "-10%", width: "100%", height: "80%", background: "none", }}>
                <br></br><br></br>
                <center><h5>Customer List</h5></center>
                <div className="container">
                    <table class="table table-striped table-hover table-sm caption-top">
                        <thead>
                            <tr>
                                <th class="text-center" scope="col">NIC</th>
                                <th class="text-center" scope="col">NAME</th>
                                <th class="text-center" scope="col">CONTACT NO</th>
                                <th class="text-center" scope="col">EMAIL</th>
                                <th class="text-center" scope="col">REG DATE</th>
                                <th class="text-center" scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customers) => {
                                return (

                                    <tr >
                                        <td >{customers.NIC}</td>
                                        <td >{customers.name}</td>
                                        <td >{customers.contactNo}</td>
                                        <td >{customers.email}</td>
                                        <td class="text-center">{customers.regDate}</td>
                                        <td class="text-center">


                                            <Link class="btn btn-primary mr-2" to={`/customer/get/${customers.NIC}`} role="button">View</Link>
                                            <Link class="btn btn-outline-primary mr-2" to={`/customer/update/${customers.NIC}`} role="button">Update</Link>
                                            <Link class="btn btn-danger mr-2" onClick={() => deleteCustomer(customers.NIC)} role="button">Delete</Link>
                                            <Link class="btn btn-outline-primary mr-2" to={"/addOrder"} role="button">Add Order</Link>
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