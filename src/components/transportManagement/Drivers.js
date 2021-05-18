import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'
import { Modal } from "react-bootstrap"



const HOST = "http://localhost:8050/Driver"

export default function Drivers() {

    const [Drivers, setDrivers] = useState([]);
    console.log(Drivers,"<<<<<<<<<<<<<<<<<<<");


    useEffect(() => {

        axios.get(HOST + "/viewD")
            .then((res) => {
                setDrivers(res.data);
                console.log(Drivers,"<<<<<<<<<<<<<<<<<<<");
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);

    



    return (
        // <>
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
            

            <div className="container-fluid mt-3">
                <MaterialTable  style={{background:"#E3ECFF"}}
                    title=" Vehicles Details"
                    

                    columns={[
                        { title: "FName", field: "FirstName", type: "string" },
                        { title: "LName", field: "LastName", type: "string" },
                        { title: "NIC", field: "NIC", type: "string" },
                        { title: "MobileNumber", field: "MobileNumber", type: "string" },
                        { title: "Age", field: "Age", type: "numeric" },
                    ]}

                    data={Drivers}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,

                    }}

                    
                />

               

            </div>

            <div className="container-fluid"><a href="/addVehicle" class="btn-sm btn-primary btn-lg active float-right " role="button" aria-pressed="true"> + Add New Vehicle </a></div>
        

        {/* </> */}

        </div>
    )

}


