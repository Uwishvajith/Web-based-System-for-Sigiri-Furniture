import React, { useState,useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";

export default function AddTenderRestock() {

  const [item, setItems] = useState([]);
  
  const [tenderid, setTenderid] = useState("");
  const [supp_id, setSuppid] = useState("");
  const [itemcode, setItemcode] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");


  function sendData(e) {
    e.preventDefault();

    const newTender = {
      tenderid,
      supp_id,
      itemcode,
      type,
      description,
      quantity,
    };

    axios
      .post("http://localhost:8070/Tender/add", newTender)
      .then(() => {
        alert("New Tender added");
        function refreshPage() {
          window.location.reload();
        }
        refreshPage();
      })
      .catch((err) => {
        alert(err);
      });
  }
  useEffect(() => {
    axios
      .get("http://localhost:8070/item/")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
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
      <div className="container" style={{ width: 1000, marginTop: 200,marginBottom: 100, display: "flex",marginLeft: 400 }}>
        <div
          className="border border-info"
          style={{
            
            
            backgroundColor: "#e7ebe8",
            marginLeft: -300,
            

            
          }}
        >
          <form
            onSubmit={sendData}
            style={{
              marginTop: 50,
              marginLeft: 30,
              marginRight: 30,
              height: 700,
              width: 600,
              
            }}
          >
            <legend
              style={{
                fontSize: 36,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 50,
              }}
            >
              {" "}
              ADD TENDERRESTOCK DETAILS
            </legend>

            <div className="mb-3">
              <label for="id">Tender Id</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => {
                  setTenderid(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="supp_id">Supplier Id</label>
              <input
                type="text"
                className="form-control"
                id="supp_id"
                onChange={(e) => {
                  setSuppid(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="itemcode">Itemcode</label>
              <input
                type="text"
                className="form-control"
                id="itemcode"
                onChange={(e) => {
                  setItemcode(e.target.value);
                }}
              />
            </div>

            {/*<div className="mb-3">
                <label for="type" >Type</label>
                <input type="text" className="form-control" id="type" 
                onChange={(e)=>{

                    setType(e.target.value);


                }}/>

            </div>*/}
            

            <div className="mb-3">
              <label for="type">Type</label>
              <select
                className="form-control"
                name="type"
                id="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option>Choose</option>
                <option>Tender</option>
                <option>Order</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="quantity">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-outline-info mr-4">
                Add Tender Details
              </button>
            </div>
            
          </form>
          
          <br></br>
        </div>
        

      <div  class = "div container" >
      <div >
        <MaterialTable
          style={{backgroundColor:" #e7e7e7"}}
          title={"Tender Details List"}
          columns={[
           
            { title: "Itemname", field: "itemname", type: "String" },
            { title: "Itemcode", field: "itemcode", type: "String" },
            { title: "quantity", field: "quantity", type: "String" },
            { title: "required", field: "minrequired", type: "Number" },
            
           
          ]}
          data={item}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}

          className="div container"
          style={{

            marginLeft: 100,
            marginTop: 2,
            width:550,
            
          }}
        />
      
        </div>
      </div>
      </div>
      
    </div>
  );
  }

