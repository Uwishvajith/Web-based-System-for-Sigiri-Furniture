import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";



function UpdateOrder() {
    let history = useHistory();
    const { oID } = useParams();//taking the orderid value from all orders table component


    useEffect(() => {
        loadOrder();
    }, []);

    const [orderId, setOrderId] = useState("");
    const [cNIC, setCnic] = useState("");
    const [type, setType] = useState("");
    const [oDate, setOdate] = useState("");
    const [dAddress, setdAddress] = useState("");
    const [additonalCharge, setAdditonalCharge] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [oStatus, setOstatus] = useState("");
    const [oEmpId, setOempId] = useState("");



    const onSubmit = async e => {
        e.preventDefault();//to prevent the default submission by submit button

        const answer = window.confirm("Are you sure you want to update details?");
        if (answer) {

            const newOrder = {
                orderId, cNIC, type, oDate, dAddress, additonalCharge, finalPrice, oStatus, oEmpId
            }
            await axios.put(`https://sigiri-furniture-app.herokuapp.comorder/updates/${oID}`, newOrder).then(() => {
                alert("Order details successfully Updated");


            }).catch((err) => {
                alert(err.response.data.error);
            })
            history.push("/displayOrders")

        } else {

        }
    }

    const loadOrder = async () => {
        await axios.get(`https://sigiri-furniture-app.herokuapp.comorder/getOrder/${oID}`).then((res) => {
            console.log(res.data)
            setOrderId(res.data.order.orderId);
            setCnic(res.data.order.cNIC);
            setType(res.data.order.type);
            setOdate(res.data.order.oDate);
            setdAddress(res.data.order.dAddress);
            setAdditonalCharge(res.data.order.additonalCharge);
            setFinalPrice(res.data.order.finalPrice);
            setOstatus(res.data.order.oStatus);
            setOempId(res.data.order.oEmpId);

        }).catch((error) => {
            alert(error.message);
        })

    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div style={{ position: "absolute", top: "15%", left: "30%", width: "50%", height: "90%", }}>
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
            <div className="container" class="border border-dark border-2" style={{ background: "#e7ebe8" }}>
                <form class="row g-3" onSubmit={onSubmit} style={{ marginLeft: 30, marginRight: 30,font: "italic small-caps bold 16px/30px Georgia, serif" }}>
                    
                    <center>
                        <h3>Update Order Details </h3></center>
                    <div className="form-group" style={{ font: "italic small-caps bold 16px/30px Georgia, serif" }} >
                        <div class="d-grid gap-2 d-md-flex justify-content-md" >
                            <div class="col-md-2">
                                <label for="OrderId" >OrderID</label>
                                <input type="text" className="form-control" name="OrderId" value={orderId} onChange={(event) => { setOrderId(event.target.value) }} pattern="OI[0-9]{3}" required disabled />
                            </div>
                            <div class="col-md-3">
                                <label for="CustomerNIC"  >Customer NIC </label>
                                <input type="text" className="form-control" name="cNIC" value={cNIC} onChange={(event) => { setCnic(event.target.value) }} pattern="[0-9]{9}V" required disabled />
                            </div>
                            <div class="col-md-3">
                                <label for="type">Order Type</label>
                                <input type="text" className="form-control" name="type" value={type} onChange={(event) => { setType(event.target.value) }} required disabled />
                            </div>

                            <div class="col-md-3.5">
                                <label for="oDate" >Date</label>
                                <input type="date" className="form-control" name="oDate" value={oDate} onChange={(event) => { setOdate(event.target.value) }} required disabled />
                            </div>
                        </div>


                        <div className="form-group">
                            <label for="dAddress" className="form-label" >Delievery Address</label>
                            <input type="text" className="form-control" name="dAddress" value={dAddress} onChange={(event) => { setdAddress(event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label for="additonalCharge" className="form-label">Additional/Pending Charge</label>
                            <input type="text" className="form-control" name="additonalCharge" value={additonalCharge} onChange={(event) => { setAdditonalCharge(event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label for="finalPrice" className="form-label" >Final Price</label>
                            <input type="text" className="form-control" name="finalPrice" value={finalPrice} onChange={(event) => { setFinalPrice(event.target.value) }} required />
                        </div>
                        <div className="form-group">
                            <label for="oStatus" className="form-label" >Order Status</label>
                            <input type="text" className="form-control" name="oStatus" value={oStatus} onChange={(event) => { setOstatus(event.target.value) }} required />
                        </div>
                        <div className="form-group">
                            <label for="oEmpId" className="form-label" >Employee Id</label>
                            <input type="text" className="form-control" name="oEmpId" value={oEmpId} onChange={(event) => { setOempId(event.target.value) }} pattern="VM[0-9]{3}" required disabled />

                        </div>


                    </div>
                    <div className="form-group">
                        <div style={{position:"absolute",bottom: "2%", left: "67%", width: "15%", height: "10%"}}>
                        <div className="d-grid gap-2 d-md-flex justify-content">
                            <button className="btn btn-primary" type="reset" value="RESET" onClick={refreshPage}>RESET</button>
                            <button className="btn btn-primary ml-2" type="submit" value="SUBMIT">UPDATE ORDER</button>
                        </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content">

                            <Link to={`/orderItem/update/${oID}`}> <button class="text-decoration-none" class="btn btn-danger ">Update Product List</button> </Link>
                            <Link to={"/displayOrders"}> <button class="text-decoration-none" class="btn btn-success ml-2 "> BACK</button> </Link>

                        </div>
                    </div>


                    <div className="form-group">

                    </div>
                </form>
            </div>


        </div>
    )

}

export default UpdateOrder;