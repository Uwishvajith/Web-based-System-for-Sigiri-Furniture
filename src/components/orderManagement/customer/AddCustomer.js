import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function AddCustomer() {

  const [NIC, setNIC] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [regDate, setRegDate] = useState("");
  const [empId, setEmpId] = useState("");

  function sendData(e) {
    e.preventDefault();//to prevent the default submission by submit button
    const answer = window.confirm("Are you sure you want to confirm submission?");
    if (answer) {
      const newCustomer = { NIC, name, organization, address, contactNo, email, regDate, empId }

      axios.post("http://localhost:8090/customer/add", newCustomer).then(() => {
        alert("Customer added successfully")
        function refreshPage() {
          window.location.reload();
        }
        refreshPage();

      }).catch((err) => {
        alert(err.response.data.error)

        //alert(err.response.data.errorCode)

      })
    }
  }


  return (
    <div style={{ position: "absolute", top: "15%", left: "30%", width: "50%", height: "90%", }}>

      <div className="container" style={{ background: "#e7ebe8" }} class="border border-dark border-2">
        <form onSubmit={sendData} style={{ font: "italic small-caps bold 16px/28px Georgia, serif", marginLeft: 30, marginRight: 30 }}>
          <center>
            <h3>CREATE NEW CUSTOMER PROFILE</h3></center>
          <br></br>
          <div className="form-group" >
            <div class="d-grid gap-2 d-md-flex justify-content-md" >
              <div className="col-md-4">
                <label for="CustomerNIC"  >Customer NIC</label>
                <input type="text" className="form-control"
                  name="CNIC"
                  placeholder="98521359V"
                  pattern="[0-9]{9}V" required
                  onChange={(event) => { setNIC(event.target.value); }} />
              </div>

              <div className="col-md-4">
                <label for="RegDate"  >Registration Date</label>
                <input type="date" className="form-control"
                  name="Cdate" required
                  onChange={(event) => { setRegDate(event.target.value); }} />
              </div>

              <div className="col-md-3">
                <label for="empId" >Sales Assitant</label>
                <input type="text" className="form-control"
                  name="CSAid"
                  placeholder="VM001" required
                  pattern="VM[0-9]{3}"
                  onChange={(event) => { setEmpId(event.target.value); }} />

              </div>

            </div>
          </div>
          <div className="form-group">
            <label for="CustomerName" className="form-label" >Customer Name With Initials</label>
            <input type="text" className="form-control"
              name="Cname"
              placeholder="K.M.K Karunadasa" required
              onChange={(event) => { setName(event.target.value); }} />
          </div>
          <div className="form-group">
            <label for="organization" className="form-label">Organization</label>
            <input type="text" className="form-control"
              name="Corg"
              placeholder="PlaceHoldings"
              onChange={(event) => { setOrganization(event.target.value); }} />
          </div>
          <div className="form-group">
            <label for="CustomerAddress" className="form-label">Customer Address</label>
            <textarea className="form-control" rows="1" cols="2"
              name="Caddress"
              placeholder="No,street,District"
              onChange={(event) => { setAddress(event.target.value); }} />
          </div>
          <div className="form-group">
            <label for="ContactNo" className="form-label" >Contact Number</label>
            <input type="text" className="form-control"
              name="Cnum" placeholder="778812546"
              pattern="[0-9]{9}" required
              onChange={(event) => { setContactNo(event.target.value); }} />
          </div>
          <div className="form-group">
            <label for="CustomerEmail" className="form-label">Email Address</label>
            <input type="text" className="form-control"
              name="Cemail"
              placeholder="abc@gmail.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}" required
              onChange={(event) => { setEmail(event.target.value); }} />
          </div>


          <div className="form-group">

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

              <button className="btn btn-outline-primary me-md-2" type="reset" value="RESET">RESET</button>
              <button className="btn btn-outline-primary me-md-2 ml-2" type="submit" value="SUBMIT">SUBMIT</button>
            </div>
          </div>
        </form>

      </div>

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
              <a href="#">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
          </ul>
        </nav>



      </div>

      <Link to="/allCustomer"> <button class="text-decoration-none" class="btn btn-danger"> BACK</button> </Link>
    </div>
  )

}