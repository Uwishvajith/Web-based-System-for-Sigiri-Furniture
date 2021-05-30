import React, { useState } from "react";
import axios from "axios";

const HOST = "http://sigiri-furniture-app.herokuapp.com/vehicle";

export default function UpdateVehicle({ data, cl }) {

  const [formDetails, setFormDetails] = useState({
    VehicleID: data.VehicleID,
    VehicleRegNo: data.VehicleRegNo,
    Date: data.Date,
    VehicleType: data.VehicleType,
    VehicleBrand: data.VehicleBrand,
    Mileage: data.Mileage,
  });
  const [RegNoErr, setRegNoErr] = useState("");
  
  

  const onSubmit = (e) => {
    e.preventDefault();

    
    const isValid =formValidation();

    if(isValid){//send data after validate

    

    axios
      .put(
        `${HOST}/update/${formDetails.VehicleID}`,
        {
          VehicleID: formDetails.VehicleID,
          VehicleRegNo: formDetails.VehicleRegNo,
          Date: formDetails.Date,
          VehicleType: formDetails.VehicleType,
          VehicleBrand: formDetails.VehicleBrand,
          Mileage: parseInt(formDetails.Mileage, 10),
        },
        {}
      )
      .then((response) => {
        alert("Vehicle updated Successfully !");
        window.location.reload(true);
      })
      .catch((err) => {
        alert("Error occured !");
      });
    }
  };

  const handleChange = (e) => {
    let name = e.currentTarget.name; //get variable names
    let val = e.currentTarget.value; //get values

    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

  const formValidation =() => {//validation function
    const RegNoErr ={};//state
    let isValid =true;//return boolean value, setting flag


    if(formDetails.VehicleRegNo.trim().length >8){
        RegNoErr.InvalidRegNo="Invalid Vehicle registration number";//error
        isValid=false;
    }

    setRegNoErr(RegNoErr); //update error objects
    return isValid;

}

  return (
    <div class="area">
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label for="VehcleID" className="form-label">
              Vehicle ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="VehicleID"
              placeholder="Vehicle ID"
              onChange={handleChange}
              value={formDetails.VehicleID}
              disabled
            ></input>
          </div>

          <div className="mb-3">
            <label for="regNo" className="form-label">
              Vehicle Registration No:
            </label>
            <input
              type="text"
              className="form-control"
              name="VehicleRegNo"
              placeholder="Registration Number ABC-XXXX"
              onChange={handleChange}
              value={formDetails.VehicleRegNo}
            ></input>
          </div>

                   {Object.keys(RegNoErr).map((key)=>{
                        return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                    })}


          <div className="mb-3">
            <label for="date" className="form-label">
              Date :
            </label>
            <input
              type="date"
              className="form-control"
              name="date"
              placeholder="Date"
              onChange={handleChange}
              value={formDetails.Date}
            ></input>
          </div>
          <div className="mb-3">
            <label for="VehicleType" className="form-label">
              Vehicle Type :
            </label>
            <input
              type="VehicleType"
              className="form-control"
              name="VehicleType"
              placeholder="Vehicle Type"
              onChange={handleChange}
              value={formDetails.VehicleType}
            ></input>
          </div>
          <div className="mb-3">
            <label for="VehicleBrand" className="form-label">
              Vehicle Brand :
            </label>
            <input
              type="VehicleBrand"
              className="form-control"
              name="VehicleBrand"
              placeholder="Vehicle Brand"
              onChange={handleChange}
              value={formDetails.VehicleBrand}
            ></input>
          </div>
          <div className="mb-3">
            <label for="Mileage" className="form-label">
              Mileage :
            </label>
            <input
              type="Mileage"
              className="form-control"
              name="Mileage"
              placeholder="Mileage"
              onChange={handleChange}
              value={formDetails.Mileage}
            ></input>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "5px" }}
          >
            Update
          </button>
          <button type="button" class="btn btn-primary " onClick={cl}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
