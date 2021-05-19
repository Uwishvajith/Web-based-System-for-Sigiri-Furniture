/**This file contains implementation of bills details page pop up Edit button function
owned by IT19965550
Walpola S.R.
*/


import React, { useState, useEffect, Component } from "react"
import axios from 'axios'


//create constant for path
const HOST = "http://localhost:8000/bills"

export default function ProductUpdateForm({data, data01}) {

    const [BillDetails, setBillDetails] = useState({
        pid: data._id,
        topic: data.BillType,
        day: data.Date,
        price: data.Amount
    })

    const onSubmit = (e) => {
        e.preventDefault()
  
        //update method implementation
        axios.put(HOST+"/update/"+BillDetails.pid+"/", {
            BillType: BillDetails.topic,
            Date: BillDetails.day,
            Amount: BillDetails.price
        }, {})
            .then((response) => {
                alert("Updated Successfully !")
            }).catch((err) => {
                alert("Error occured !")
            })
    }

    const EditValues = (e) => {
        let name = e.currentTarget.name
        let val = e.currentTarget.value

        setBillDetails({
            ...BillDetails,
            [name]: val
        })
    }


return (
    /* Data update Form */
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Bill Type</lable>
              <input
                type="text"
                class="form-control"
                name="topic"
                placeholder="Ex:Electricity"
                pattern="[A-Za-z ]{3,20}"
                title="Bill type must be between 3 to 20 characters in length and contain only Alphabats"
                value={BillDetails.topic}
                onChange={EditValues}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <lable style={{ marginBottom: "5px" }}>Date</lable>
              <input
                type="date"
                className="form-control"
                name="day"
                value={BillDetails.day}
                onChange={EditValues}
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
                value={BillDetails.price}
                onChange={EditValues}
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