import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";


function UpdateOrderItems() {
  let history = useHistory();
  const { oID } = useParams();


  useEffect(() => {
    loadOrderItems();
  }, []);

  const [orderId, setOrderId] = useState("");
  const [productId1, setProductId1] = useState("");
  const [productId2, setProductId2] = useState("");
  const [productId3, setProductId3] = useState("");
  const [qty1, setQty1] = useState("");
  const [qty2, setQty2] = useState("");
  const [qty3, setQty3] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");


  const onSubmit = async e => {
    e.preventDefault();//to prevent the default submission by submit button

    const answer = window.confirm("Are you sure you want to update the product list details?");
    if (answer) {

      const newOrderItems = {
        orderId, productId1, qty1, feature1, productId2, qty2, feature2, productId3, qty3, feature3
      }
      await axios.put(`http://localhost:8090/orderItem/updatesOrderItem/${oID}`, newOrderItems).then(() => {
        alert("Order Product List details successfully Updated");


      }).catch((err) => {
        alert(err.response.data.error);
      })
      history.push("/displayOrders")

    } else {

    }
  }



  const loadOrderItems = async () => {
    await axios.get(`http://localhost:8090/orderItem/getOrderItem/${oID}`).then((res) => {
      console.log(res.data.orderItem)
      setOrderId(res.data.orderItem.orderId);
      setProductId1(res.data.orderItem.productId1);
      setQty1(res.data.orderItem.qty1);
      setFeature1(res.data.orderItem.feature1);
      setProductId2(res.data.orderItem.productId2);
      setQty2(res.data.orderItem.qty2);
      setFeature2(res.data.orderItem.feature2);
      setProductId3(res.data.orderItem.productId3);
      setQty3(res.data.orderItem.qty3);
      setFeature3(res.data.orderItem.feature3);

    }).catch((error) => {
      alert(error.message);
    })

  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div style={{ position: "absolute", top: "25%", left: "30%", width: "50%", height: "95%" }}>

      <div style={{ position: "absolute", top: "-13%", left: "-60%", width: "15%", height: "120%" }}>

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
      <div className="container"  >
        <form class="row g-3" onSubmit={onSubmit} style={{ background: "#e7ebe8" }}>
          <center>
            <h3>Update Order Details </h3></center>
          <div className="form-group" style={{ font: "italic small-caps bold 16px/30px Georgia, serif" }} >

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
                      <td><input className="form-control" type="text" name="productId1"
                        value={productId1}
                        onChange={(event) => { setProductId1(event.target.value) }} disabled /></td>
                      <td><input className="form-control" type="text" name="qty1"
                        value={qty1}
                        onChange={(event) => { setQty1(event.target.value) }} disabled /></td>
                      <td><input className="form-control" type="text" name="feature1"
                        value={feature1}
                        onChange={(event) => { setFeature1(event.target.value) }} /></td>
                    </tr>
                    <tr>
                      <td><input className="form-control" type="text" name="productId2"
                        value={productId2}
                        onChange={(event) => { setProductId2(event.target.value) }} disabled /></td>
                      <td><input className="form-control" type="text" name="qty2"
                        value={qty2}
                        onChange={(event) => { setQty2(event.target.value) }} disabled /></td>
                      <td><input className="form-control" type="text" name="feature2"
                        value={feature2}
                        onChange={(event) => { setFeature2(event.target.value) }} /></td>
                    </tr>
                    <tr>
                      <td><input className="form-control" type="text" name="productId3"
                        value={productId3}
                        onChange={(event) => { setProductId3(event.target.value) }} disabled /></td>
                      <td><input className="form-control" type="text" name="qty3"
                        value={qty3}
                        onChange={(event) => { setQty3(event.target.value) }} disabled /></td>
                      <td><input className="form-control" type="text" name="feature3"
                        value={feature3}
                        onChange={(event) => { setFeature3(event.target.value) }} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>
          <div className="form-group">

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-outline-primary me-md-2" type="reset" value="RESET" onClick={refreshPage}>RESET</button>
              <button className="btn btn-outline-primary me-md-2 ml-2" type="submit" value="SUBMIT">UPDATE PRODUCT LIST</button>
            </div>
          </div>
        </form>

      </div>

      <Link to={`/order/update/${oID}`}> <button class="text-decoration-none" class="btn btn-danger btn-lg"> BACK</button> </Link>

    </div>
  )

}

export default UpdateOrderItems;