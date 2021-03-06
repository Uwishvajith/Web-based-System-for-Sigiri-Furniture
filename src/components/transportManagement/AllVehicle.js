import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'
import { Modal } from "react-bootstrap"
import UpdateVehicle from "./UpdateVehicle"


const HOST = "https://sigiri-furniture-app.herokuapp.com/vehicle"

export default function AllVehicle() {

    const [Vehicles, setVehicles] = useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [VehicleUpdate, setVehicleUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [VehicleDelete, setVehicleDelete] = useState()

    useEffect(() => {

        axios.get(HOST + "/")
            .then((res) => {
                setVehicles(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);

    function onDelete() {
        axios.delete(HOST + "/delete/" + VehicleDelete)
            .then((res) => {
                console.log(res)
                alert('Vehicle deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting vehicle data')
            })

    }

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
           

            <div className="container-fluid mt-3">
                <MaterialTable  style={{background:"#E3ECFF"}}
                    title=" Vehicles Details"

                    columns={[
                        { title: "Vehicle ID", field: "VehicleID", type: "string" },
                        { title: "Vehicle RegNo", field: "VehicleRegNo", type: "string" },
                        { title: "Date", field: "Date", type: "string" },
                        { title: "Vehicle Type", field: "VehicleType", type: "string" },
                        { title: "Vehicle Brand", field: "VehicleBrand", type: "string" },
                        { title: "Mileage (km)", field: "Mileage", type: "numeric" },
                    ]}

                    data={Vehicles}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,

                    }}

                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                            onClick: (event, rowData) => {
                                setVehicleUpdate(rowData); //setVehiclewithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setVehicleDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                    ]}
                />
                {/*update modal */}
                <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateVehicle data={VehicleUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                    {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this vehicle details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>

            </div>

            <div className="container-fluid"><a href="/addVehicle" class="btn-sm btn-primary btn-lg active float-right " role="button" aria-pressed="true"> + Add New Vehicle </a></div>
        

        {/* </> */}

        </div>
    )

}


