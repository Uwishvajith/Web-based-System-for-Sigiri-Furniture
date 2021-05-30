/**This file contains implementation of payment details page pop up Edit button function
owned by IT19965550
Walpola S.R.
*/

import React, { useState, useEffect, Component } from "react"
import axios from 'axios'

//create constant for path
const HOST = "http://sigiri-furniture-app.herokuapp.com/payments"

export default function ProductUpdateForm({data, data01}) {

    const [PayDetails, setPayDetails] = useState({
        pid: data._id,
        des: data.Description,
        day: data.Date,
        price: data.Amount
    })

    const onSubmit = (e) => {
        e.preventDefault()
  
        //update method implementation
        axios.put(HOST+"/update/"+PayDetails.pid+"/", {
            Description: PayDetails.des,
            Date: PayDetails.day,
            Amount: PayDetails.price
        }, {})
            .then((response) => {
                alert("Updated Successfully !")
            }).catch((err) => {
                alert("Error occured !")
            })
    }

    const ChangeValues = (e) => {
        let name = e.currentTarget.name
        let val = e.currentTarget.value

        setPayDetails({
            ...PayDetails,
            [name]: val
        })
    }


return (
    /* Data update Form */
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Description</lable>
              <input
                type="text"
                className="form-control"
                name="des"
                placeholder="Ex:Warehouse fee"
                pattern="[A-Za-z ]{3,20}"
                title="Description must be between 3 to 20 characters in length and contain only Alphabats"
                value={PayDetails.des}
                onChange={ChangeValues}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Date</lable>
              <input
                type="date"
                className="form-control"
                name="day"
                value={PayDetails.day}
                onChange={ChangeValues}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Amount</lable>
              <input
                type="text"
                className="form-control"
                name="price"
                placeholder="Ex:25000"
                pattern="[0-9]{1,20}"
                title="Amount must be a number"
                value={PayDetails.price}
                onChange={ChangeValues}
              />
            </div>

            <button
              className="btn btn-success"
              type="submit"
              style={{ marginRight: "15px" }}
            >Save</button>
            <button type="button" class="btn btn-danger" onClick={data01}>Cancel</button>
          </form>
        </div>
    );
}