import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function UpdatePromotionDetails() {
  const { promotionid } = useParams();
  let history = useHistory();


  const [promoid, setPromoid] = useState("");
  const [productid, setProductid] = useState("");
  const [category, setCategory] = useState("");
  const [starting_date, setStarting_date] = useState("");
  const [clossing_date, setClossing_date] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    loadPromotionDetails();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    const newPromotion = {
      promotionid, productid, category, starting_date, clossing_date, description, media, budget, status

    }

    await axios.put(`https://sigiri-furniture-app.herokuapp.com/promotion/update/${promotionid}`, newPromotion).then(() => {
      alert("Promotion details update Successfully")
    }).catch((err) => {
      alert(err);
    })

  }

  const loadPromotionDetails = async () => {
    await axios.get(`https://sigiri-furniture-app.herokuapp.com/promotion/get/${promotionid}`).then((res) => {
      console.log(res.data);
      setPromoid(res.data.promotions.promotionid);
      setProductid(res.data.promotions.productid);
      setCategory(res.data.promotions.category);
      setStarting_date(res.data.promotions.starting_date);
      setClossing_date(res.data.promotions.clossing_date);
      setDescription(res.data.promotions.description);
      setMedia(res.data.promotions.media);
      setBudget(res.data.promotions.budget);
      setStatus(res.data.promotions.status);

    }).catch((err) => {
      alert(err.message);
    })
  };

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
                <a href="/">
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
        
        <div className="border border-info" style={{ marginBottom: 60, backgroundColor: "#e7ebe8" }} >


          <form onSubmit={onSubmit} style={{ marginTop: 50, marginLeft: 30, marginRight: 30, height: 800 }}>
          <h1 style={{ fontSize:30, top :70,fontFamily:"Georgia" ,textAlign:"center" }}>Update Promotion Details</h1><br></br>
            <div className="mb-3">
              <label for="promotionid" >Promotion ID</label>
              <input type="text" className="form-control" id="promotionid" value={promotionid} onChange={(e) => {
                setPromoid(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="productid" >Product ID</label>
              <input type="text" className="form-control" id="productid" value={productid} onChange={(e) => {
                setProductid(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="category" >Category</label>
              <input type="text" className="form-control" id="category" value={category} onChange={(e) => {
                setCategory(e.target.value);
              }} />

            </div>

            <div className="row">
              <div className="col">
                <label for="starting_date" >Starting Date</label>
                <input type="date" class="form-control" id="starting_date" value={starting_date} onChange={(e) => {
                  setStarting_date(e.target.value);
                }} />

              </div>

              <div className="col">
                <label for="clossing_date" >Closing Date</label>
                <input type="date" class="form-control" id="clossing_date" value={clossing_date} onChange={(e) => {
                  setClossing_date(e.target.value);
                }} />

              </div>
            </div>

            <br></br>
            <div className="mb-3">
              <label for="description" >Description</label>
              <input type="textarea" className="form-control" id="description" value={description} onChange={(e) => {
                setDescription(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="media" >Media</label>
              <input type="text" className="form-control" id="media" value={media} onChange={(e) => {
                setMedia(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="budget" >Budget</label>
              <input type="text" className="form-control" id="budget" value={budget} onChange={(e) => {
                setBudget(e.target.value);
              }} />

            </div>

            <div className="mb-3">
              <label for="status" >status</label>
              <input type="textarea" className="form-control" id="status" value={status} onChange={(e) => {
                setStatus(e.target.value);
              }} />

            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-outline-info" >Update Promotion Details</button>
              <Link className="btn btn-outline-info ml-2" role="button" to="/allview">View All Promotions </Link>
            </div>
          </form><br></br>
        </div>
      </div>
    </div>

  );

};
