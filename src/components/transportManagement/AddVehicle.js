import React, { useState } from "react"
import axios from "axios"



export default function AddVehicle() {

    const [VehicleID, setID] = useState("");
    const [VehicleRegNo, setRegNo] = useState("");
    const [Date, setDate] = useState("");
    const [VehicleType, setVehicleType] = useState("");
    const [VehicleBrand, setVehicleBrand] = useState("");
    const [Mileage, setMileage] = useState("");
    // const [RegNoErr, setRegNoErr] = useState("");


    function sendData(e) {//event




        e.preventDefault(); //prevent normal behaviour of submit button


        const newVehicle = {
            VehicleID,
            VehicleRegNo,
            Date,
            VehicleType,
            VehicleBrand,
            Mileage,

        }


        // const isValid =formValidation();

        axios.post("http://localhost:8050/vehicle/add", newVehicle)

            .then(() => {
                alert("Vehicle added")

            }).catch((err) => {
                alert(err)
            })


    }

    //     const formValidation =() => {
    //     const RegNoErr ={};
    //     let isValid =true;


    //     if(RegNoErr.trim().length >8){
    //         RegNoErr.InvalidRegNo="Invalid Vehicle registration number";
    //         isValid=false;
    //     }

    //     setRegNoErr(RegNoErr); //update error 
    //     return isValid;

    // }

    return (

        <div class="area">
            <nav class="main-menu bg-primary">
                <ul>
                    <li>
                        <a href="http://justinfarrow.com">
                            <i class="fa fa-home fa-2x"></i>
                            <span class="nav-text">Dashboard</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </a>
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa fa-users fa-2x"></i>
                            <span class="nav-text">Employee List</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </a>
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa-user-plus fa-2x"></i>
                            <span class="nav-text">Add Employee</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </a>
                    </li>
                </ul>

                <ul class="logout">
                    <li>
                        <a href="#">
                            <i class="fa fa-power-off fa-2x"></i>
                            <span class="nav-text">Logout</span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </nav>


            <div className="container mb-3" style={{ top: "500" }}>
                <h1>Add Vehicle Details</h1>
                <form className="mt-5" onSubmit={sendData}>


                    <div className="mb-3">
                        <label for="regNo" className="form-label">Vehicle ID :</label>
                        <input type="text" className="form-control" id="regNo" placeholder="Vehicle ID"
                            onChange={(e) => {
                                setID(e.target.value); // assign value
                            }}

                        ></input>
                    </div>

                    <div className="mb-3">
                        <label for="regNo" className="form-label">Vehicle Registration No:</label>
                        <input type="text" className="form-control" id="regNo" placeholder="Registration Number"
                            onChange={(e) => {
                                setRegNo(e.target.value); // assign value
                            }}

                        ></input>

                    </div>

                    {/* {Object.keys(RegNoErr).map((key)=>{
                        return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                    })} */}


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
                </form>
            </div>
        </div>
    )

}