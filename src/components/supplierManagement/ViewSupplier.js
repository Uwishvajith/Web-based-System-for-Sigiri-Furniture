import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function ViewSupplier() {
  const { supp_id } = useParams();

  const [suppliers, setSuppliers] = useState({});

  useEffect(() => {
    loadSupplier();
  }, []);

  const loadSupplier = async () => {
    await axios
      .get(`https://sigiri-furniture-app.herokuapp.comSupplier/gets/${supp_id}`)
      .then((res) => {
        console.log(res.data);
        setSuppliers(res.data.suppliers);
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
      <div>
        <div className="container ay-4">
          <br></br>
          <h1 className="display-4" style={{ fontSize: 30, top: 70 }}>
            TenderRestock Detail
          </h1>
          <hr />
          <br></br>

          <ul className="list-group">
            <table style1={{ width: 800 }}>
              <tr>
                <td>
                  <li className="list-group-item">Supplier id</li>
                </td>
                <td>
                  <li className="list-group-item">{suppliers.supp_id}</li>
                </td>
              </tr>
              <tr>
                <td>
                  <li className="list-group-item">Supplier name</li>
                </td>
                <td>
                  <li className="list-group-item">{suppliers.supplier_name}</li>
                </td>
              </tr>
              <tr>
                <td>
                  <li className="list-group-item">Organization</li>
                </td>
                <td>
                  <li className="list-group-item">{suppliers.organization}</li>
                </td>
              </tr>
              <tr>
                <td>
                  <li className="list-group-item">Address</li>
                </td>
                <td>
                  <li className="list-group-item">{suppliers.address}</li>
                </td>
              </tr>
              <tr>
                <td>
                  <li className="list-group-item">Contact number</li>
                </td>
                <td>
                  <li className="list-group-item">
                    {suppliers.contact_number}
                  </li>
                </td>
              </tr>

              <tr>
                <td>
                  <li className="list-group-item">Email</li>
                </td>
                <td>
                  <li className="list-group-item">{suppliers.email}</li>
                </td>
              </tr>
              <tr>
                <td>
                  <li className="list-group-item">Fax</li>
                </td>
                <td>
                  <li className="list-group-item">{suppliers.fax}</li>
                </td>
              </tr>
              <tr>
                <td>
                  <li className="list-group-item">Credit limit</li>
                </td>
                <td>
                  <li className="list-group-item">{suppliers.credit_limit}</li>
                </td>
              </tr>
            </table>
          </ul>
        </div>
      </div>
    </div>
  );
}
