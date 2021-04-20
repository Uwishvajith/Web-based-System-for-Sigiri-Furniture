import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function AddPromotionDetails() {
  const [promotionid, setPromotionid] = useState("");
  const [productid, setProductid] = useState("");
  const [category, setCategory] = useState("");
  const [starting_date, setStarting_date] = useState("");
  const [clossing_date, setClossing_date] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newPromotion = {
      promotionid,
      productid,
      category,
      starting_date,
      clossing_date,
      description,
      media,
      budget,
      status
    }

    axios.post("http://localhost:8080/promotion/add", newPromotion).then(() => {
      alert("New Promotion Added");
      function refreshPage() {
        window.location.replace("/allview");
      }
      refreshPage();
    }).catch((err) => {
      alert(err)
    })

  }

  function refreshPage() {
    window.location.reload();
  }


  return (
    <div>

      <div>
        <div>
          <nav class="main-menu bg-primary">
            <ul>
              <li>
                <a href="/allview">
                  <i class="fa fa-home fa-2x"></i>
                  <span class="nav-text">Home</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>

              <li>
                <a href="/allview">
                  <i class="fa fa-table fa-2x"></i>
                  <span class="nav-text">View Promotions</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/addpromotion">
                  <i class="fa fa-plus-circle fa-2x"></i>
                  <span class="nav-text">Add Promotions</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/getproductprice">
                  <i class="fa fa-dollar fa-2x"></i>
                  <span class="nav-text">View Product Prices</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/addadd">
                  <i class="fa fa-plus-circle fa-2x"></i>
                  <span class="nav-text">Add Product Prices</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>

              <li>
                <a href="/promotion/report">
                  <i class="fa fa-file-pdf-o fa-2x"></i>
                  <span class="nav-text">Promotion Report</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="/price/report">
                  <i class="fa fa-file-pdf-o fa-2x"></i>
                  <span class="nav-text">Price Report</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
            </ul>

            <ul class="logout">
              <li>
                <a href="#">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text" >Logout</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container" style={{ width: 800, marginTop: 120 }}>

        <div className="border border-info" style={{ marginBottom: 60, backgroundColor: "#ccccb3" }} >


          <form onSubmit={sendData} style={{ marginTop: 50, marginLeft: 30, marginRight: 30, height: 800 }}>
            <h1 style={{fontSize:30, top :70,textAlign:"center",fontFamily:"Georgia"}}>Add Promotion Details</h1><br></br><br></br>
            <div className="mb-3">
              <label for="promotionid" >Promotion ID</label>
              <input type="text" className="form-control" id="promotionid" 
              onChange={(e) => {
                setPromotionid(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="productid" >Product ID</label>
              <input type="text" className="form-control" id="productid" 
              onChange={(e) => {
                setProductid(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="category" >Category</label>
              <input type="text" className="form-control" id="category" 
              onChange={(e) => {
                setCategory(e.target.value);
              }} />

            </div>

            <div className="row">
              <div className="col">
                <label for="starting_date" >Starting Date</label>
                <input type="date" class="form-control" id="starting_date" 
                onChange={(e) => {
                  setStarting_date(e.target.value);
                }} />

              </div>

              <div className="col">
                <label for="clossing_date" >Closing Date</label>
                <input type="date" class="form-control" id="clossing_date" 
                onChange={(e) => {
                  setClossing_date(e.target.value);
                }} />

              </div>
            </div>

            <br></br>
            <div className="mb-3">
              <label for="description" >Description</label>
              <input type="textarea" className="form-control" id="description" 
              onChange={(e) => {
                setDescription(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="media" >Media</label>
              <input type="text" className="form-control" id="media" 
              onChange={(e) => {
                setMedia(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="budget" >Budget</label>
              <input type="text" className="form-control" id="budget" 
              onChange={(e) => {
                setBudget(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="status" >status</label>
              <input type="textarea" className="form-control" id="status" 
              onChange={(e) => {
                setStatus(e.target.value);
              }} />

            </div>
            <br></br>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-outline-info ml-2" >Add Promotion Details</button>
              <Link className="btn btn-outline-info ml-2" role="button" to="/allview">View All Promotions </Link>
              <button className="btn btn-outline-info ml-2" n ame="refresh" id="refresh" onClick={refreshPage}>Refresh</button>
            </div>
          </form><br></br><br></br><br></br>
        </div>
      </div>
    </div>

  )
}