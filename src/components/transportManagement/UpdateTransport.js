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

  const onSubmit = (e) => {
    e.preventDefault();


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
  };

  const handleChange = (e) => {
    let name = e.currentTarget.name; //get variable names
    let val = e.currentTarget.value; //get values

    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

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
              name="regNo"
              placeholder="Registration Number"
              onChange={handleChange}
              value={formDetails.VehicleRegNo}
            ></input>
          </div>
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
              value="completed"
              
            ></input>
            
          </div>
          



          {/* <div className="mb-3">
            <label for="Status" className="form-label">
              Status :
            </label>
            <select  className="w-50 h-25 ml-5 btn  dropdown" value = {formDetails.Status}
                                      onchange={handleChange}  // assign value
                                    
        
                                >
                                
                                <option value="Pending">Pending</option>
                                <option value="Completed">completed</option>
                                </select>

            
          </div> */}

          {/* <div className="mb-3">
              <label for="maritalStatus">Marital Status:</label>
              <select
                value={formDetails.Status}
                id="maritalStatus"
                className="form-control"
                onChange={ handleChange
                }
              >
                <option id="pending">Pending</option>
                <option id="completed">Completed</option>
              </select>
            </div> */}

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
