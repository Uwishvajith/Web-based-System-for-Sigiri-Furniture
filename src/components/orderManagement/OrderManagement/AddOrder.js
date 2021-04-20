import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

export default function AddOrder() {

    let history = useHistory();
    const [customers, setCustomers] = useState([]);
    let [count, setCount] = useState(0);

    const [orderId, setOrderId] = useState("");
    const [cNIC, setCnic] = useState("");
    const [type, setType] = useState("");
    const [oDate, setOdate] = useState("");
    const [dAddress, setdAddress] = useState("");
    const [additonalCharge, setAdditonalCharge] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [oStatus, setOstatus] = useState("");
    const [oEmpId, setOempId] = useState("");
    const [productId1, setProductId1] = useState("");
    const [productId2, setProductId2] = useState("");
    const [productId3, setProductId3] = useState("");
    const [qty1, setQty1] = useState("");
    const [qty2, setQty2] = useState("");
    const [qty3, setQty3] = useState("");
    const [feature1, setFeature1] = useState("");
    const [feature2, setFeature2] = useState("");
    const [feature3, setFeature3] = useState("");



    function sendData(e) {

        e.preventDefault();//to prevent the default submission by submit button
        //check weather the entered NIC is already available in the system



        const answer = window.confirm("Are you sure you want to confirm submission?");
        if (answer) {

            const newOrder = {
                orderId, cNIC, type, oDate, dAddress, additonalCharge, finalPrice, oStatus, oEmpId
            }

            const newOrderItem = {
                orderId, productId1, qty1, feature1, productId2, qty2, feature2, productId3, qty3, feature3
            }




            axios.post("http://localhost:8090/order/addOrder", newOrder).then(() => {
                alert("Order successfully placed");
                axios.post("http://localhost:8090/orderItem/addOrderItems", newOrderItem).then(() => {
                    alert("Order items are successfully added");

                    history.push("/displayOrders");

                }).catch((err) => {
                    alert(err.message);
                });

            }).catch((err) => {
                alert(err.response.data.error);
            })


        }


    }

    function refreshPage() {
        window.location.reload();

    }
    function checkCustomerExistance() {
        axios.get(`http://localhost:8090/customer/searchCustomer/${cNIC}`).then((res) => {
            setCustomers(res.data);
        }).catch((err) => {
            alert(err.response.data.error);
        })
    }



    function showDelivery() {//function executed when the check box is clicked

        if (document.getElementById("flexCheckIndeterminate").checked) {

            document.getElementById("hide1").style.display = "block";
            document.getElementById("hide2").style.display = "block";
        } else {
            document.getElementById("hide1").style.display = "none";
            document.getElementById("hide2").style.display = "none";
        }
    }



    function nextPage() {
        if (cNIC === "") {
            alert("IN ORDER TO PROCEED FILL OUT THE FORM");
            refreshPage();
        } else {
            count = count + 1;
            setCount(count);
            checkCustomerExistance();

            if (count >= 2 && customers.length === 0) {
                alert("This NIC bearing customer does not exist in the system, CREATE A PROFILE NOW!");
                history.push("/addCustomer");
            } else if (customers.length === 0) {
                alert("Press NEXT BUTTON one more time to check the existance of Customer");
            } else if (customers.length !== 0) {
                alert("Customer Exists you can proceed");
                document.getElementById("main-hide2").disabled = "true";
                //document.getElementById("main-hide3").style.display="none";
                //document.getElementById("main-hide4").style.display="none";
                document.getElementById("main-hide5").style.display = "none";
                document.getElementById("main-hide6").style.display = "block";
                document.getElementById("main-hide7").style.display = "block";
                document.getElementById("main-hide8").style.display = "block";
                document.getElementById("main-hide9").style.display = "block";
                document.getElementById("main-hide10").style.display = "block";
                document.getElementById("bckBtn").style.display = "block";
                document.getElementById("nxtBtn").style.display = "none";
            }
        }

    }

    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async () => {
        await axios.get(`http://localhost:8090/order/getLatestOrder/`).then((res) => {
            console.log(res.data);
            setOrderId(res.data.order[0].orderId);


        }).catch((error) => {
            alert(error.message);
        })

    };


    return (
        <div style={{ position: "absolute", top: "12%", left: "20%", width: "80%", height: "100%" }}>
            <div style={{ position: "absolute", top: "0%", left: "-25%", width: "15%", height: "110%" }}>

                <nav class="main-menu bg-primary">
                    <ul>
                        <li class="has-subnav">
                            <Link to="/">
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
            <br></br><h3>Last added Order Id : {orderId}</h3>
            <div style={{ position: "absolute", top: "8%", left: "-5%", width: "60%", height: "100%" }}>
                <br></br>
                <div className="container" class="border border-dark border-2" style={{ background: "#e7ebe8" }}>

                    <form class="row g-3" onSubmit={sendData} style={{ marginLeft: 30, marginRight: 30 }}>
                        <center><h3>Place An Order</h3></center>

                        <div class="d-grid gap-2 d-md-flex justify-content-md" id="main-hide1" >
                            <div class="col-sm" >
                                <label for="orderId" class="form-label">Order Id</label>
                                <input type="text" class="form-control"
                                    name="orderId"
                                    placeholder="OI001"
                                    required pattern="OI[0-9]{3}"
                                    onChange={(event) => { setOrderId(event.target.value); }} />
                            </div>
                            <div class="col-sm" >
                                <label for="oDate" class="form-label">Order placed Date</label>
                                <input type="date" class="form-control"
                                    name="oDate" required
                                    onChange={(event) => { setOdate(event.target.value); }} />
                            </div>
                            <div class="col-md-3">
                                <label for="cNIC" class="form-label">Customer NIC</label>
                                <input type="text" class="form-control"
                                    id="main-hide2"
                                    name="cNIC"
                                    placeholder="985236417V"
                                    required
                                    pattern="[0-9]{9}V"
                                    enabled="true"
                                    onChange={(event) => { setCnic(event.target.value) }} />
                            </div>

                            <div class="col-sm" >
                                <label for="orderId" class="form-label">Type</label>
                                <select class="form-select"
                                    name="type" id="type" required
                                    onChange={(event) => { setType(event.target.value); }}>

                                    <option id="choose1" >select</option>
                                    <option id="customized" >customized</option>
                                    <option id="ready-made">ready-made</option>

                                </select>
                            </div>
                        </div>
                        <div class="col-sm-7" style={{ display: " " }} id="main-hide5">
                            <div class="form-check"  >
                                <br></br>
                                <input class="form-check-input" type="checkbox"
                                    value="" id="flexCheckIndeterminate" onClick={showDelivery} />
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                    Wants the order to be delivered
                                </label>

                            </div>
                        </div>

                        <div class="col-12" style={{ display: "none" }} id="hide1">
                            <label for="dAddress" class="form-label">Delivery Address</label>
                            <input type="text" class="form-control"
                                name="dAddress"
                                placeholder="No 148,StreetWay,Colombo5"
                                onChange={(event) => { setdAddress(event.target.value); }} />
                        </div>


                        <div class="col-md-6" style={{ display: "none" }} id="hide2">
                            <label for="additionCharge" class="form-label">Additional/Pending Charge</label>
                            <input type="text" class="form-control"
                                name="additionCharge"
                                placeholder="2000.00"
                                onChange={(event) => { setAdditonalCharge(event.target.value); }} />
                        </div>

                        <div class="col-md-6" style={{ display: " " }} id="main-hide6" >
                            <label for="oEmpId" class="form-label">Sales Assistant</label>
                            <input type="text" class="form-control"
                                name="oEmpId"
                                placeholder="VM001" required
                                pattern="VM[0-9]{3}"
                                onChange={(event) => { setOempId(event.target.value); }} />
                        </div>


                        <div className="form-group" style={{ display: "none" }} id="main-hide7">
                            <div class="d-grid gap-2 d-md-flex justify-content-md" >
                                <div class="col-md-4">
                                    <label for="id1">Product Id</label>
                                    <input type="text" class="form-control"
                                        name="id1"
                                        placeholder="PI001" pattern="PI[0-9]{3}" required
                                        onChange={(event) => { setProductId1(event.target.value); }} />
                                </div>
                                <div class="col-md-2">
                                    <label for="qty1">Quantity</label>
                                    <input type="text" class="form-control"
                                        name="qty1" required
                                        placeholder="2" maxLength="2" max="20" min="1"
                                        onChange={(event) => { setQty1(event.target.value); }} />
                                </div>
                                <div class="col-md-2">
                                    <label for="price1">Unit Price</label>
                                    <input type="text" class="form-control" name="price1" />
                                </div>
                                <div class="col-md-3">
                                    <label for="feature1">Customize</label>
                                    <input type="text" class="form-control"
                                        id="feature1"
                                        placeholder="colours only"
                                        onChange={(event) => { setFeature1(event.target.value); }} />
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md" >
                                <div class="col-md-4">
                                    <input type="text" class="form-control"
                                        name="id2"
                                        placeholder="PI001"
                                        pattern="PI[0-9]{3}"
                                        onChange={(event) => { setProductId2(event.target.value); }} />
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control"
                                        name="qty2"
                                        placeholder="2" maxLength="2" max="20" min="1"
                                        onChange={(event) => { setQty2(event.target.value); }} />
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control" name="price2" />
                                </div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control"
                                        name="feature2"
                                        placeholder="colours only"
                                        onChange={(event) => { setFeature2(event.target.value); }} />
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md" >
                                <div class="col-md-4">
                                    <input type="text" class="form-control"
                                        name="id3"
                                        placeholder="PI001"
                                        pattern="PI[0-9]{3}"
                                        onChange={(event) => { setProductId3(event.target.value); }} />
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control"
                                        name="qty3"
                                        placeholder="2" maxLength="2" max="20" min="1"
                                        onChange={(event) => { setQty3(event.target.value); }} />
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control" name="price3" />
                                </div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control"
                                        name="feature3"
                                        placeholder="colours only"
                                        onChange={(event) => { setFeature3(event.target.value); }} />
                                </div>
                            </div>
                        </div>



                        <div class="col-md-6" style={{ display: "none" }} id="main-hide8">
                            <button className="btn btn-primary" type="button" id="calPrice">GetFinalPrice</button>
                            <label for="finalPrice" class="form-label"></label>
                            <input type="text" class="form-control"
                                name="finalPrice"
                                placeholder="25000.00" required
                                onChange={(event) => { setFinalPrice(event.target.value); }} />
                        </div>

                        <div class="col-sm" style={{ display: "none" }} id="main-hide9">
                            <label for="oStatus" class="form-label">Order Status</label>
                            <select class="form-select"
                                name="oStatus" id="oStatus"
                                onChange={(event) => { setOstatus(event.target.value); }} required >

                                <option id="choose2">choose</option>
                                <option id="completed">completed</option>
                                <option id="pending">pending</option>
                                <option id="cancel">cancel</option>

                            </select>
                        </div>

                        <div className="form-group" >
                            <div class="d-grid gap-2 d-md-flex justify-content-md">
                                <button className="btn btn-primary me-md-2" type="button"
                                    id="bckBtn"
                                    style={{ display: "none" }}
                                    onClick={refreshPage}> BACK</button>
                                <button className="btn btn-primary" type="button"
                                    id="nxtBtn"
                                    onClick={nextPage}>NEXT</button>
                            </div>
                        </div>


                        <div className="form-group" style={{ display: "none" }} id="main-hide10">
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-primary me-md-2" type="reset" value="RESET" id="rstBtn">RESET</button>
                                <button className="btn btn-primary" type="submit" value="SUBMIT" id="sbtBtn">SUBMIT</button>
                            </div>
                        </div>


                    </form>


                </div>
            </div>

            <div style={{ position: "absolute", top: "12%", right: "5%", width: "36%", height: "88%" }}>
                <div className="container" class="border border-dark border-2">
                    <form>
                        <center>
                            <h5>Product Details</h5>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <br></br>
                                    <input type="text" class="form-control" id="ProductName" placeholder="Enter Product Name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <br></br>
                                    <input type="text" class="form-control" id="ProductId" placeholder="Enter Product Id" />
                                    <br></br>
                                </div>
                                <div class="col">
                                    <button className="btn btn-outline-danger" name="reset" value="reset" disabled>RESET</button>
                                    <button className="btn btn-outline-danger" name="submit" value="submit" disabled>SEARCH</button>
                                </div>
                            </div>
                        </center>
                    </form>
                    <hr></hr>
                    <br></br>
                    <ul class="list-group">
                        <center><li>Search Result</li></center>


                        <li class="list-group-item list-group-item-primary">Product Name :</li>
                        <li class="list-group-item list-group-item-secondary">Product Code :</li>
                        <li class="list-group-item list-group-item-success">No of available items :</li>
                        <li class="list-group-item list-group-item-danger">Customizability : </li>
                        <li class="list-group-item list-group-item-warning">Unit Price :</li>
                        <li class="list-group-item list-group-item-info">Available Discount :</li>
                        <li class="list-group-item list-group-item-light">Selling price:</li>
                    </ul>
                </div>
                <br></br>
                <Link to="/displayOrders"> <button class="text-decoration-none" class="btn btn-danger"> BACK</button> </Link>
            </div>

        </div>
    )

}