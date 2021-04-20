import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";

export default function UpdateSupplier() {
  const { supp_id } = useParams();

  const [supplier_id, setSupplierid] = useState("");
  const [supplier_name, setSupplierName] = useState("");
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");
  const [credit_limit, setCreditlimit] = useState("");

  useEffect(() => {
    loadSupplier();
  }, []);

  const onSubmit = async (e) => {
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

    await axios
      .put(`http://localhost:8070/Supplier/updates/${supp_id}`, newSupplier)
      .then(() => {
        alert("Supplier details update Successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const loadSupplier = async () => {
    await axios
      .get(`http://localhost:8070/Supplier/gets/${supp_id}`)
      .then((res) => {
        console.log(res.data);
        setSupplierid(res.data.suppliers.supp_id);
        setSupplierName(res.data.suppliers.supplier_name);
        setOrganization(res.data.suppliers.organization);
        setAddress(res.data.suppliers.address);
        setContactNumber(res.data.suppliers.contact_number);
        setEmail(res.data.suppliers.email);
        setFax(res.data.suppliers.fax);
        setCreditlimit(res.data.suppliers.credit_limit);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
      <div className="container" style={{ width: 800, marginTop: 50 }}>
        <h1 style={{ fontSize: 30, top: 70 }}> Update Supplier Details</h1>
        <br></br>
        <div
          className="border border-info"
          style={{
            marginBottom: 60,
            borderRadius: 20,
            backgroundColor: "#98AFC7",
          }}
        >
          <form
            onSubmit={onSubmit}
            style={{
              marginTop: 50,
              marginLeft: 30,
              marginRight: 30,
              height: 850,
            }}
          >
            <legend
              style={{
                fontSize: 35,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 70,
              }}
            >
              {" "}
              UPDATE SUPPLIER DETAILS
            </legend>

            <div className="mb-3">
              <label for="id">Supplier Id</label>
              <input
                type="text"
                className="form-control"
                id="supp_id"
                value={supp_id}
                onChange={(e) => {
                  setSupplierid(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name">Supplier Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={supplier_name}
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
                value={organization}
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
                value={address}
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
                id="contact_no"
                value={contact_number}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="fax">Fax</label>
              <input
                type="text"
                className="form-control"
                id="fax"
                value={fax}
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
                value={credit_limit}
                onChange={(e) => {
                  setCreditlimit(e.target.value);
                }}
              />
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-outline-info mr-4">
                Update Supplier Details
              </button>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}
