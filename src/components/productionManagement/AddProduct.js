import React, { useState } from "react"
import axios from "axios"

export default function AddProduct() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");

    function addProduct(e) {
        e.preventDefault();


        const newProduct = {
            id,
            name,
            type,
            price,
            qty
        }

        axios.post("http://localhost:8060/products/add", newProduct).then(() => {
            alert("Product Added Successfully")
            e.target.reset();


        }).catch((err) => {
            alert("Product ID Duplicated")
        })

    }


    return (

        <div>
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
       
        <div className="add_form">
        <div className="productform">
            <center>
            <div class="topic"><h2>Add New Product</h2> <br></br>
            <br></br></div>
            <form onSubmit={addProduct}>
                <div class="form-row">
                    <div class="form_content">
                        <label for="pId">Product ID : </label>
                        <input type="text" class="form-control" id="pId" placeholder="Product ID" pattern="PI[0-9]{3}"
                            onChange={(e) => {

                                setId(e.target.value);

                            }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form_content">
                        <label for="name">Product Name : </label>
                        <input type="text" class="form-control" id="name" placeholder="Product name"
                            onChange={(e) => {

                                setName(e.target.value);

                            }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form_content">
                        <label for="ptype">Product Type : </label>
                        <input type="text" class="form-control" id="ptype" placeholder="Steel/Wooden etc"
                            onChange={(e) => {

                                setType(e.target.value);

                            }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form_content">
                        <label for="ptype">Product Price : Rs.</label>
                        <input type="text" class="form-control" id="ptype" placeholder="Price Rs."
                            onChange={(e) => {

                                setPrice(e.target.value);

                            }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form_content">
                        <label for="qty">Quantity : </label>
                        <input type="text" class="form-control" id="qty" placeholder="Qty"
                            onChange={(e) => {

                                setQty(e.target.value);

                            }} />
                    </div>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Add Product</button>
            </form>
            </center>
            </div>
            <br></br>
        </div>
        </div>
        
    )
}
