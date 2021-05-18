import React, { useState, useEffect } from 'react';
import axios from "axios";
import MaterialTable from "material-table";

export default function PriceReport() {

  const [productprices, setProductPrices] = useState([]);


  useEffect(() => {

    axios.get("http://localhost:8080/productprice/getproductprice").then((res) => {
      console.log(res.data);
      setProductPrices(res.data);
    }).catch((error) => {
      alert(error.message);
    })


  }, [])

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


      <div className="container-fluid" style={{ paddingLeft: 130, marginTop: 120, paddingRight: 100 }}>

        <div>
          <br></br>
          <br></br>
          <MaterialTable style={{backgroundColor:"#E3ECFF"}}
            title={"Product Prices List"}
            columns={[
              { title: "Sales ID", field: "salesid", type: "text" },
              { title: "Product ID", field: "productid", type: "text" },
              { title: "Category", field: "category", type: "text" },
              { title: "Starting Date", field: "starting_date", type: "text" },
              { title: "Closing Date", field: "clossing_date", type: "text" },
              { title: "Discount", field: "discount", type: "text" },
              { title: "Price", field: "price", type: "text" },
              { title: "Discount Price", field: "discountprice", type: "text" },
              { title: "New Price", field: "newprice", type: "text" },
              { title: "Quentity", field: "quentity", type: Number }


            ]}

            data={productprices}

            options={{
              sorting: true,
              actionsColumnIndex: -1,
              exportButton: true
            }}
          />

        </div>
        <br></br>
        <br></br>
        <br></br>

      </div>
    </div>



  );

}