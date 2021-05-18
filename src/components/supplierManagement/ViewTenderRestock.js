import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function ViewTenderRestock() {
  const { tenderid } = useParams();

  const [Tenders, setTenders] = useState({});

  useEffect(() => {
    loadTender();
  }, []);

  const loadTender = async () => {
    await axios
      .get(`http://localhost:8060/Tender/get/${tenderid}`)
      .then((res) => {
        console.log(res.data);
        setTenders(res.data.Tenders);
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
          Supplier Detail
        </h1>
        <hr />
        <br></br>

        <ul className="list-group">
          <table style1={{ width: 800 }}>
            <tr>
              <td>
                <li className="list-group-item">Tender Id</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.tenderid}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">Supplier Id</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.supp_id}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">ItemCode</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.itemcode}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">Type</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.type}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">Description</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.description}</li>
              </td>
            </tr>

            <tr>
              <td>
                <li className="list-group-item">Quantity</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.quantity}</li>
              </td>
            </tr>
          </table>
        </ul>
      </div>
    </div>
    </div>
  );
}
