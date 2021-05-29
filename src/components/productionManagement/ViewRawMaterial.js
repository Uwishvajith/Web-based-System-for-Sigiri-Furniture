import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

export default function InventoryReport() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("https://sigiri-furniture-app.herokuapp.com/inventories")
      .then((res) => {
        setInventory(res.data);
        console.log("Data has been received");
        console.log(res.data);
      })
      .catch(() => {
        alert("Error while fetching data");
      });
  }, []);

    return (

        <>
      <div class="">
        <nav class="main-menu bg-primary">
          <ul>
            <li>
              <a href="http://localhost:3000/add">
                <i class="fa fa-plus-square fa-2x"></i>
                <span class="nav-text">Add New Product</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="http://localhost:3000/view">
                <i class="fa fa-search fa-2x"></i>
                <span class="nav-text">Products</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="http://localhost:3000/rawMaterial">
                <i class="fa fa-cogs fa-2x"></i>
                <span class="nav-text">Raw Material</span>
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


        <div className="productiontable">
        <MaterialTable style={{background:"#E3ECFF"}}
          title="Details of Inventory"
          columns={[
            { title: "Itemcode", field: "itemcode", type: "string" },
            {title: "Itemname", field: "itemname", type: "string",},
            { title: "Category", field: "category", type: "String" },
            { title: "Description", field: "description", type: "string" },      
            { title: "Currentstock", field: "currentstock", type: "number",},
            
           
          ]}
          data={inventory}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
        <a href="mailto:sigiristores@gmail.com">
        <button class="btn btn-primary">Request raw material</button>
        </a>
      </div>
      </>

            
            
    )
}