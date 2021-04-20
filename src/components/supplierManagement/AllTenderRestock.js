import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllTenderRestock() {
  const [Tenders, setTenders] = useState([]);

  const deleteTender = async (tenderid) => {
    await axios.delete(`http://localhost:8070/Tender/delete/${tenderid}`);
    alert("deleted");
    getTenders();
  };

  function getTenders() {
    axios
      .get("http://localhost:8070/Tender/")
      .then((res) => {
        console.log(res.data);
        setTenders(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getTenders();
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
        <div style={{ paddingLeft: 150, marginTop: 200, paddingRight: 100 }}>
          <h1 style={{ fontSize: 30 }}>All TenderRestock Details</h1>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Tender Id</th>
                <th scope="col">supplier Id</th>
                <th scope="col">Item Code</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Tenders.map((Tenders) => {
                return (
                  <tr>
                    <td>{Tenders.tenderid}</td>
                    <td>{Tenders.supp_id}</td>
                    <td>{Tenders.itemcode}</td>
                    <td>{Tenders.type}</td>
                    <td>{Tenders.description}</td>
                    <td>{Tenders.quantity}</td>

                    <Link
                      class="btn btn-info mr-2"
                      role="button"
                      to={`/getTender/${Tenders.tenderid}`}
                    >
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      role="button"
                      to={`/updateTender/${Tenders.tenderid}`}
                    >
                      Update
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteTender(Tenders.tenderid)}
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
            <Link to="/add">+ Back TenderRestock</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
