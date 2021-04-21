//import React,{useState} from "react"
//import axios from "axios"

//adding
import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'
import { Modal } from "react-bootstrap"


const HOST = "http://localhost:8050/Maintenance"



export default function AddMaintaince() {


    const [MaintainID, setID] = useState("");
    const [VehicleRegNo, setRegNo] = useState("");
    const [Date, setDate] = useState("");
    const [Discription, setDiscription] = useState("");
    const [Cost, setCost] = useState("");



    function sendData(e) {//event

        e.preventDefault(); //prevent normal behaviour of submit button


        const newMaintaince = {
            MaintainID,
            VehicleRegNo,
            Date,
            Discription,
            Cost
        }

        axios.post("http://localhost:8050/Maintenance/addM", newMaintaince)

            .then(() => {
                alert("Maintaince details  added")
                window.location.reload(true)//reload page

            }).catch((err) => {
                alert(err)
            })
    }



    //adding
    const [Maintenances, setMaintenances] = useState([]);


    useEffect(() => {

        axios.get(HOST + "/viewM")
            .then((res) => {
                setMaintenances(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);





    return (
        <div class="component-body">
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            <a href="/viewVehicle">
                                <i class="fa fa-home fa-2x"></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
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
                        <li class="has-subnav">
                            <a href="/addM">
                                <i class="fa fa-wrench fa-2x"></i>
                                <span class="nav-text">Maintenance</span>
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


            <div className="container" style={{ top: "500" }}>
                <h1>Maintance Details</h1>
                <form className="mt-5" onSubmit={sendData}>


                    <div className="mb-3">
                        <label for="Maintenance ID" className="form-label">Maintenance ID :</label>
                        <input type="text" className="form-control" id="regNo" placeholder="Maintenance ID"
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
                    <div className="mb-3">
                        <label for="date" className="form-label">Date :</label>
                        <input type="date" className="form-control" id="date" placeholder="Date"
                            onChange={(e) => {
                                setDate(e.target.value); // assign value
                            }}

                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="VehicleType" className="form-label">Description :</label>
                        <input type="VehicleType" className="form-control" id="VehicleType" placeholder="Description"
                            onChange={(e) => {
                                setDiscription(e.target.value); // assign value
                            }}

                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="VehicleBrand" className="form-label">Maintenance Cost :</label>
                        <input type="VehicleBrand" className="form-control" id="VehicleBrand" placeholder="Maintenance Cost"
                            onChange={(e) => {
                                setCost(e.target.value);  // assign value
                            }}

                        ></input>
                    </div>


                    <button type="submit" className="btn btn-primary" >Add Details</button>
                </form>




                <div className="container-fluid mt-5">
                    <MaterialTable
                        title="Maintenance Details"

                        columns={[
                            { title: "Vehicle id", field: "MaintainID", type: "string" },
                            { title: "Vehicle RegNo", field: "VehicleRegNo", type: "string" },
                            { title: "Date", field: "Date", type: "string" },
                            { title: "Description", field: "Discription", type: "string" },
                            { title: "Cost", field: "Cost", type: "string" },

                        ]}

                        data={Maintenances}
                        options={{
                            sorting: true,
                            actionsColumnIndex: -1,

                        }}

                    />


                </div>
            </div>
        </div>
        </div>

    )

}