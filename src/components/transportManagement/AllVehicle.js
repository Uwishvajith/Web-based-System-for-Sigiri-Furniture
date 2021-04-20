import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'
import { Modal } from "react-bootstrap"
import UpdateVehicle from "./UpdateVehicle"


const HOST = "http://localhost:8050/vehicle"

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
        <>

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
            </div>

            <div className="container-fluid">
                <MaterialTable
                    title=" Vehicles Details"

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

                    }}

                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-secondary">Update</button>,
                            onClick: (event, rowData) => {
                                setVehicleUpdate(rowData); //setVehiclewithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-secondary">Delete</button>,
                            onClick: (event, rowData) => {
                                setVehicleDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                    ]}
                />

                <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateVehicle data={VehicleUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>

                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this vehicle details ?</p>
                        <button type="button" class="btn btn-outline-secondary mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>

            </div>

        </>
    )

}


