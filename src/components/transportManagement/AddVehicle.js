import React, { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';



export default function AddVehicle() {
    //states
    const [VehicleID, setID] = useState("");
    const [VehicleRegNo, setRegNo] = useState("");
    const [Date, setDate] = useState("");
    const [VehicleType, setVehicleType] = useState("");
    const [VehicleBrand, setVehicleBrand] = useState("");
    const [Mileage, setMileage] = useState("");
    const [RegNoErr, setRegNoErr] = useState("");


    function sendData(e) {//event




        e.preventDefault(); //prevent normal behaviour of submit button

        const isValid =formValidation();

        if(isValid){//send data after validate

        const newVehicle = {
            VehicleID,
            VehicleRegNo,
            Date,
            VehicleType,
            VehicleBrand,
            Mileage,

        }


        
        axios.post("http://localhost:8060/vehicle/add", newVehicle)

            .then(() => {
                alert("Vehicle added")

            }).catch((err) => {
                alert(err)
            })

    }
}

        const formValidation =() => {//validation function
        const RegNoErr ={};//state
        let isValid =true;//return boolean value, setting flag


        if(VehicleRegNo.trim().length >8){
            RegNoErr.InvalidRegNo="Invalid Vehicle registration number";//error
            isValid=false;
        }

        setRegNoErr(RegNoErr); //update error objects
        return isValid;

    }

    return (

        <div class ="component-body">
        
        
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            <a href="/AllT">
                                <i class="fa fa-home fa-2x"></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewVehicle">
                                <i class="fa fa-automobile fa-2x"></i>
                                <span class="nav-text">Vehicle List</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/addVehicle">
                                <i class="fa fa-ambulance fa-2x"></i>
                                <span class="nav-text">Add Vehicle</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addT">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Transort Detials</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/ViewT">
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                <span class="nav-text">View Transport Details</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addM">
                                <i class="fa fa-wrench fa-2x"></i>
                                <span class="nav-text">Maintenance</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewD">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span class="nav-text">Driver Details</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/ReportT">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Transport Reports</span>
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
            </div>


            <div className="container mb-3" style={{ top: "500" }}>
                <h1>Add Vehicle Details</h1>
                <form className="mt-5" onSubmit={sendData}>


                    <div className="mb-3">
                        <label for="regNo" className="form-label">Vehicle ID :</label>
                        <input type="text" className="form-control" id="regNo" placeholder="eg: V001"
                        pattern="V[0-9]{3}" required
                            onChange={(e) => {
                                setID(e.target.value); // assign value
                            }}

                        ></input>
                        <p class="font-weight-light">eg : V001</p>
                    </div>

                    <div className="mb-3">
                        <label for="regNo" className="form-label">Vehicle Registration No:</label>
                        <input type="text" className="form-control" id="regNo" placeholder="Registration Number ABC-XXXX"
                            onChange={(e) => {
                                setRegNo(e.target.value); // assign value
                            }}

                        ></input>

                    </div>

                    {Object.keys(RegNoErr).map((key)=>{
                        return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                    })}


                    <div className="mb-3">
                        <label for="date" className="form-label">Date :</label>
                        <input type="date" className="form-control" id="date" placeholder="Date"
                            onChange={(e) => {
                                setDate(e.target.value); // assign value
                            }}

                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="VehicleType" className="form-label">Vehicle Type :</label>
                        <input type="VehicleType" className="form-control" id="VehicleType" placeholder="Vehicle Type"
                            onChange={(e) => {
                                setVehicleType(e.target.value); // assign value
                            }}

                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="VehicleBrand" className="form-label">Vehicle Brand :</label>
                        <input type="VehicleBrand" className="form-control" id="VehicleBrand" placeholder="Vehicle Brand"
                            onChange={(e) => {
                                setVehicleBrand(e.target.value);  // assign value
                            }}

                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="Mileage" className="form-label">Mileage :</label>
                        <input type="Mileage" className="form-control" id="VehicleBrand" placeholder="Mileage"
                            onChange={(e) => {
                                setMileage(e.target.value);  // assign value
                            }}

                        >

                        </input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" >Submit</button>
                    <Link className="btn btn-primary ml-4" role="button" to="/viewVehicle">View Vehicle Details </Link>
                </form>
            </div>
        </div>
        
    )

}