import React, { useState } from "react";
import axios from "axios";

export default function AddSupplier() {
  const [supp_id, setSuppId] = useState("");
  const [supplier_name, setSupplierName] = useState("");
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");
  const [credit_limit, setCreditlimit] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newSupplier = {
      supp_id,
      supplier_name,
      organization,
      address,
      contact_number,
      email,
      fax,
      credit_limit,
    };

    axios
      .post("http://localhost:8060/Supplier/adds", newSupplier)
      .then(() => {
        alert("New Supplier added");
        function refreshPage() {
          window.location.reload();
        }
        refreshPage();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div>
        <div>
          <div class="area"></div>
          <nav class="main-menu bg-primary">
            <ul>
              <li>
                <a href="/alltenders">
                  <i class="fa fa-home fa-2x"></i>
                  <span class="nav-text">Home</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="/adds">
                  <i class="fa fa-user-plus fa-2x"></i>
                  <span class="nav-text">Add Supplier</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/s">
                  <i class="fa fa fa-users fa-2x"></i>
                  <span class="nav-text">View Supplier</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/addTender">
                  <i class="	fa fa-cubes fa-2x"></i>
                  <span class="nav-text">Add TenderRestock</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/alltenders">
                  <i class="fa fa-cube fa-2x"></i>
                  <span class="nav-text">View TenderRestock</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/report/tender">
                  <i class="	fa fa-book fa-2x"></i>
                  <span class="nav-text">Tender Report</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
            </ul>

            <ul class="logout">
              <li>
                <a href="/">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">Logout</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container" style={{ width: 800, marginTop: 200 }}>
        <div
          className="border border-info"
          style={{
            marginBottom: 60,
            
            backgroundColor: "#e7ebe8",
          }}
        >
          <form
            onSubmit={sendData}
            style={{
              marginTop: 50,
              marginLeft: 30,
              marginRight: 30,
              height: 850,
            }}
          >
            <legend
              style={{
                fontSize: 40,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 150,
              }}
            >
              {" "}
              ADD SUPPLIER DETAILS
            </legend>

            <div className="mb-3">
              <label for="id">Supplier Id</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => {
                  setSuppId(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name">Supplier Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => {
                  setSupplierName(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="organization">Organization</label>
              <input
                type="text"
                className="form-control"
                id="organization"
                onChange={(e) => {
                  setOrganization(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="contact number">Contact number</label>
              <input
                type="text"
                className="form-control"
                id="contact_no2"
                onChange={(e) => {
                  setContactNumber(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="fax">fax</label>
              <input
                type="text"
                className="form-control"
                id="fax"
                onChange={(e) => {
                  setFax(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="credit limit">Credit_limit</label>
              <input
                type="text"
                className="form-control"
                id="address"
                onChange={(e) => {
                  setCreditlimit(e.target.value);
                }}
              />
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-outline-info mr-4">
                {" "}
                Add Supplier Details
              </button>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}
