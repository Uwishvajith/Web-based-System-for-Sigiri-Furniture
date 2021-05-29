import React, { useState } from "react";
import axios from "axios";

const HOST = "http://localhost:8060/TransportDetail";

export default function UpdateTransport({ data, cl }) {

   
  const [formDetails, setFormDetails] = useState({
    TransportID: data.TransportID,
    VehicleRegNo: data.VehicleRegNo,
    Date: data.Date,
    DriverName: data.DriverName,
    Discription: data.Discription,
    Status: data.Status,
  });
  const [RegNoErr, setRegNoErr] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const isValid =formValidation();

    if(isValid){//send data after validate



    axios
      .put(
        `${HOST}/updateT/${formDetails.TransportID}`,
        {
          TransportID: formDetails.TransportID,
          VehicleRegNo: formDetails.VehicleRegNo,
          Date: formDetails.Date,
          DriverName: formDetails.DriverName,
          Discription: formDetails.Discription,
          Status: formDetails.Status,
        },
        {}
      )
      .then((response) => {
        alert("Transport Details updated Successfully !");
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
            <label for="TransportID" className="form-label">
              Transport ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="TransportID"
              placeholder="Vehicle ID"
              onChange={handleChange}
              value={formDetails.TransportID}
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
            <label for="DriverName" className="form-label">
              Driver Name :
            </label>
            <input
              type="DriverName"
              className="form-control"
              name="DriverName"
              placeholder="Driver Name"
              onChange={handleChange}
              value={formDetails.DriverName}
            ></input>
          </div>
          <div className="mb-3">
            <label for="Discription" className="form-label">
              Description :
            </label>
            <input
              type="text"
              className="form-control"
              name="Discription"
              placeholder="Description"
              onChange={handleChange}
              value={formDetails.Discription}
            ></input>
          </div>
          <div className="mb-3">
            <label for="Discription" className="form-label">
              Current Status :
            </label>
            <input
              type="text"
              className="form-control"
              name="Discription"
              placeholder="Description"
              value={formDetails.Status}
              disabled
            ></input>
          </div>
          <div className =" mb-3 form-check">
            <label for="Status" className="form-label">
              Mark As Completed :
            </label>
            
            <input class="form-check-input position-absolute ml-3 mt-2"
              type="Checkbox"
              name="Status"
              placeholder="Status"
              onChange={handleChange}
              value="Completed"
              
            ></input>
            
          </div>
        

          <button
            type="submit"
            className="btn btn-success"
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
