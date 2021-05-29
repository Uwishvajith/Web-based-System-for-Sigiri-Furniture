import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function ViewPromotionDetails() {
  const { promotionid } = useParams();

  const [promotions, setPromotions] = useState({});

  useEffect(() => {
    loadPromotionDetails();
  }, []);

  const loadPromotionDetails = async () => {
    await axios.get(`https://sigiri-furniture-app.herokuapp.com/promotion/get/${promotionid}`).then((res) => {
      console.log(res.data);
      setPromotions(res.data.promotions);
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
      <div className="container ay-4" style={{ marginTop: 110 }}><br /><br />

        <h1 className="display-4" style={{ fontSize:30, top :70,fontFamily:"Georgia" }}> Promotion Detail  </h1>
        <hr /><br /><br />

        <ul className="list-group">
          <table styel={{ width: 800 }}>
            <tr>
              <td> <li className="list-group-item">Promotion ID </li></td>
              <td> <li className="list-group-item">{promotions.promotionid}</li></td>
            </tr>
            <tr>
              <td><li className="list-group-item list-group-item-primary">Product ID </li></td>
              <td><li className="list-group-item list-group-item-primary">{promotions.productid}</li></td>
            </tr>
            <tr>
              <td><li className="list-group-item list-group-item-secondary">Category</li></td>
              <td><li className="list-group-item list-group-item-secondary">{promotions.category}</li></td>
            </tr>
            <tr>
              <td><li className="list-group-item list-group-item-success">Starting Date </li></td>
              <td><li className="list-group-item list-group-item-success">{promotions.starting_date}</li></td>
            </tr>
            <tr>
              <td><li className="list-group-item list-group-item-danger">Closing Date </li></td>
              <td><li className="list-group-item list-group-item-danger">{promotions.clossing_date}</li></td>
            </tr>
            <tr>
              <td><li className="list-group-item list-group-item-warning">Description</li></td>
              <td><li className="list-group-item list-group-item-warning">{promotions.description}</li></td>
            </tr>
            <tr>
              <td><li className="list-group-item list-group-item-info">Media</li></td>
              <td><li className="list-group-item list-group-item-info">{promotions.media}</li></td>
            </tr>
            <tr>
              <td><li className="list-group-item list-group-item-dark">Budget </li></td>
              <td><li className="list-group-item list-group-item-dark">{promotions.budget}</li></td>
            </tr>

          </table>
        </ul>
        <br></br>
        <Link class="btn btn-info" role="button" to="/allview">Back to All </Link>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
    </div>


  );

};
