import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'




const HOST1 = "http://localhost:8060/TransportDetail"
const HOST2 = "http://localhost:8060/vehicle"
const HOST3 = "http://localhost:8060/Maintenance"


export default  function ReportT(){

    const [TransportDetails, setTransportDetails] = useState([]);
    const [Vehicles, setVehicles] = useState([]);
    const [Maintenances, setMaintenances] = useState([]);

    useEffect(() => {

        axios.get(HOST1 + "/ViewT")
            .then((res) => {
                setTransportDetails(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    useEffect(() => {

        axios.get(HOST2 + "/")
            .then((res) => {
                setVehicles(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    
    useEffect(() => {

        axios.get(HOST3 + "/viewM")
            .then((res) => {
                setMaintenances(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);



    




    return(
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





            <div className="container-fluid">

        <MaterialTable style={{background:"#E3ECFF"}}
                    title="  Transport Details Report"

                    columns={[
                        { title: "Transport id", field: "TransportID", type: "string" },
                        { title: "Vehicle RegNo", field: "VehicleRegNo", type: "string" },
                        { title: "Date", field: "Date", type: "string" },
                        { title: "DriverName", field: "DriverName", type: "string" },
                        { title: "Discription", field: "Discription", type: "string" },
                        { title: "Status", field: "Status", type: "string" },
                    ]}

                    data={TransportDetails}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,
                        exportButton: true

                    }}
      
                
                    />
                    
                
                </div>




                
            <div className="container-fluid">
                <MaterialTable style={{background:"#E3ECFF"}}
                    title=" Vehicles Details Report"

                    columns={[
                        { title: "Vehicle id", field: "VehicleID", type: "string" },
                        { title: "Vehicle RegNo", field: "VehicleRegNo", type: "string" },
                        { title: "Date", field: "Date", type: "string" },
                        { title: "VehicleType", field: "VehicleType", type: "string" },
                        { title: "VehicleBrand", field: "VehicleBrand", type: "string" },
                        { title: "Mileage (km)", field: "Mileage", type: "numeric" },
                    ]}

                    data={Vehicles}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,
                        exportButton: true

                    }}

                    
                />

                
            </div>





            <div className="container-fluid mt-5">
                    <MaterialTable style={{background:"#E3ECFF"}}
                        title="Maintenance Details Report"

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
                            exportButton: true

                        }}

                    />


                </div>




        </div>

    )

    



}