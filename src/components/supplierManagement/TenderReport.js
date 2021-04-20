import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";

export default function TenderReport() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/Tender/")
      .then((res) => {
        console.log(res.data);
        setTenders(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
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
                <a href="/add">
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
                <a href="#">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">Logout</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ paddingLeft: 130, marginTop: 120, paddingRight: 100 }}
      >
        <br></br>
        <br></br>

        <MaterialTable
          title={"Tender Details List"}
          columns={[
            { title: "Tender Id", field: "tenderid", type: "text" },
            { title: "Supplier Id", field: "supp_id", type: "text" },
            { title: "ItemCode", field: "itemcode", type: "text" },
            { title: "Type", field: "type", type: "text" },
            { title: "Description", field: "description", type: "text" },
            { title: "Quantity", field: "quantity", type: "text" },
          ]}
          data={tenders}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
