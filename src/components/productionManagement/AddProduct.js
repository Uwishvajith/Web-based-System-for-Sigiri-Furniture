import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export default function AddProduct() {

    var [id, setId] = useState("");
    var [name, setName] = useState("");
    var [type, setType] = useState("");
    var [price, setPrice] = useState("");
    var [qty, setQty] = useState("");

    function addProduct(e) {
        e.preventDefault();

        if (id === "") {
            productdemo();
        }

        const newProduct = {
            id,
            name,
            type,
            price,
            qty
        }

        axios.post("http://sigiri-furniture-app.herokuapp.com/products/add", newProduct).then(() => {
            alert("Product Added Successfully")
            e.target.reset();


        }).catch((err) => {
            alert("Product ID Duplicated")
        })

    }

    function productdemo(e) {
        e.preventDefault();
        id = "PI010";
        document.getElementById('pId').value = id;
        name = "Wardrobe";
        document.getElementById('name').value = name;
        type = "steel";
        document.getElementById('ptype').value = type;
        price = 75000;
        document.getElementById('price').value = price;
        qty = 5;
        document.getElementById('qty').value = qty;


    }

    return (

        <div>
            <nav class="main-menu bg-primary">
                <ul>
                    <li>
                        <Link to="/add">
                            <i class="fa fa-plus-square fa-2x"></i>
                            <span class="nav-text">Add New Product</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </Link>
                    </li>
                    <li class="has-subnav">
                        <Link to="/view">
                            <i class="fa fa-search fa-2x"></i>
                            <span class="nav-text">Products</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </Link>
                    </li>
                    <li class="has-subnav">
                        <Link to="/rawMaterial">
                            <i class="fa fa-cogs fa-2x"></i>
                            <span class="nav-text">Raw Material</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </Link>
                    </li>
                </ul>

                <ul class="logout">
                    <li>
                        <Link to="/">
                            <i class="fa fa-power-off fa-2x"></i>
                            <span class="nav-text">Logout</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="add_form card">
                <div className="productform card">
                    <center>
                        <div class="topic"><h2>Add New Product</h2> <br></br>
                            <br></br></div>
                        <form onSubmit={addProduct}>
                            <div class="form-row">
                                <div class="form_content">
                                    <label for="pId">Product ID : </label>
                                    <input type="text" class="form-control" id="pId" placeholder="Product ID" pattern="PI[0-9]{3}" required
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
                                    <input type="text" class="form-control" id="price" placeholder="Price Rs."
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
                            <button type="button" className="btn btn-primary mr-2" onClick={productdemo}>Data Fill</button>
                            <button type="submit" class="btn btn-primary">Add Product</button>
                        </form>
                    </center>
                </div>
                <br></br>
            </div>
        </div>

    )
}
