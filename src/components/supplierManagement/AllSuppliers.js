import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllSuppliers() {
  const [Suppliers, setSuppliers] = useState([]);

  const deleteSupplier = async (supp_id) => {
    await axios.delete(`https://sigiri-furniture-app.herokuapp.comSupplier/delete/${supp_id}`);
    alert("deleted");
    getSuppliers();
  };

  function getSuppliers() {
    axios
      .get("https://sigiri-furniture-app.herokuapp.comSupplier/")
      .then((res) => {
        console.log(res.data);
        setSuppliers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getSuppliers();
  }, []);

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
      <div>
        <div style={{ paddingLeft: 130, marginTop: 200, paddingRight: 100 }}>
          <h1 style={{ fontSize: 30 }}>All Supplier Details</h1>

          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Supplier id</th>
                <th scope="col">Supplier name</th>
                <th scope="col">Organization</th>
                <th scope="col">Address</th>
                <th scope="col">Contact_number</th>
                <th scope="col">Email</th>
                <th scope="col">Fax</th>
                <th scope="col">Credit limit</th>
              </tr>
            </thead>
            <tbody>
              {Suppliers.map((Suppliers) => {
                return (
                  <tr>
                    <td>{Suppliers.supp_id}</td>
                    <td>{Suppliers.supplier_name}</td>
                    <td>{Suppliers.organization}</td>
                    <td>{Suppliers.address}</td>
                    <td>{Suppliers.contact_number}</td>
                    <td>{Suppliers.email}</td>
                    <td>{Suppliers.fax}</td>
                    <td>{Suppliers.credit_limit}</td>

                    <Link
                      class="btn btn-primary"
                      role="button"
                      to={`/gets/${Suppliers.supp_id}`}
                    >
                      View
                    </Link>
                    <Link
                      class="btn btn-warning"
                      role="button"
                      to={`/updates/${Suppliers.supp_id}`}
                    >
                      Update
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteSupplier(Suppliers.supp_id)}
                      role="button"
                    >
                      Delete
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button className="btn btn-back">
            <Link to="/adds">+ Back Suppliers</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
