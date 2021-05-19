import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

export default function InventoryReport() {
  const [inventory, setInventory] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:8060/inventories/")
      .then((res) => {
        setInventory(res.data);
        console.log(res.data);

      })
      .catch(() => {
        alert("Error while fetching data");
      });
  }, []);

  return (
    <div class="component-body">
      <div>
          <div className="area"></div>
          <nav className="main-menu bg-primary">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-home fa-2x"></i>
                  <span className="nav-text">Dashboard</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </a>
              </li>

              <li className="has-subnav">
                <a href="/inventories">
                  <i className="fa fa-cogs fa-2x"></i>
                  <span className="nav-text">Inventory</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </a>
              </li>

              <li className="has-subnav">
                <Link to="./item">
                  <i className="fa fa-plus-square fa-2x"></i>
                  <span className="nav-text">Add Item</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
              </li>

              <li className="has-subnav">
                <Link to="/addInventory">
                  <i className="fa fa-table fa-2x"></i>
                  <span className="nav-text">Create Item Log</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
              </li>

              <li className="has-subnav">
                <Link to="/inventReport">
                  <i className="fa fa-file-pdf-o fa-2x"></i>
                  <span className="nav-text">Reports</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
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

      <div className="container-fluid">
        <div class = "d-flex justify-content-center px-auto">
        <MaterialTable style={{background:"#E3ECFF"}}
          title="Details of Inventory"
          columns={[
            {
              title: "Itemname",
              field: "itemname",
              type: "string",
            },
            { title: "Itemcode", field: "itemcode", type: "string" },
            { title: "Supplier", field: "suppliername", type: "string" },
            { title: "Quantity", field: "quantity", type: "number" },
         
            { title: "Description", field: "description", type: "string" },      
            {
              title: "Currentstock",
              field: "currentstock",
              type: "number",
            },
            { title: "NewStock", field: "newstock", type: "number" },
            { title: "Minimum", field: "minrequired", type: "number" },
            { title: "Dateofmanufactured", field: "dateofmanufactured", type: "substring(0, 15)" },
          
          
          ]}
          data={inventory}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
        </div>
      </div>
    </div>
  );
}
