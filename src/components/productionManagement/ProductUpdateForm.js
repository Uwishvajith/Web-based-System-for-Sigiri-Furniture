import React, { useState, useEffect, Component } from "react"
import axios from 'axios'

const HOST = "http://sigiri-furniture-app.herokuapp.com/products"

export default function ProductUpdateForm({ data, cl }) {

    const [formDetails, setFormDetails] = useState({
        pid: data.id,
        name: data.name,
        ptype: data.type,
        pprice: data.price,
        qty: data.qty
    })

    const onSubmit = (e) => {
        e.preventDefault()
  
        axios.put(HOST+"/update/"+formDetails.pid+"/", {
            name: formDetails.name,
            type: formDetails.ptype,
            price: formDetails.pprice,
            qty: parseInt(formDetails.qty, 10)
        }, {})
            .then((response) => {
                alert("Product details updated Successfully !")
                window.location.href = window.location.href;
            }).catch((err) => {
                alert("Error occured !")
            })
    }

    const handleChange = (e) => {
        let name = e.currentTarget.name
        let val = e.currentTarget.value

        setFormDetails({
            ...formDetails,
            [name]: val
        })
    }


    return (

        <div className="container">
            <form onSubmit={onSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="pId">Product ID : </label>
                        <input type="text" class="form-control" name="pid" placeholder="Product ID" value={formDetails.pid} disabled />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="name">Product Name : </label>
                        <input type="text" class="form-control" name="name" placeholder="Change name" onChange={handleChange} value={formDetails.name} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="ptype">Product Type : </label>
                        <input type="text" class="form-control" name="ptype" placeholder="Change type" onChange={handleChange} value={formDetails.ptype} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="ptype">Product Price : </label>
                        <input type="text" class="form-control" name="pprice" placeholder="Change price" onChange={handleChange} value={formDetails.pprice} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="qty">Quantity : </label>
                        <input type="text" class="form-control" name="qty" placeholder="Change qty" onChange={handleChange} value={formDetails.qty} />
                    </div>
                </div>
                <button type="submit" class="btn btn-success mr-3">Update details</button>
                <button type="button" class="btn btn-danger" onClick={cl}>Cancel</button>
            </form>
        </div>
    );
}



