import React, {useState} from "react"
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';

// import MaterialTable from 'material-table'




export default function AddTransport(){

    
    //states
    const [TransportID, setID] = useState("");
    const [VehicleRegNo, setRegNo] = useState("");
    const [Date, setDate] = useState("");
    const [DriverName, setName] = useState("");
    const [Discription, setDescription] = useState("");
    const [Status, setStatus] = useState("");
    const [RegNoErr, setRegNoErr] = useState("");


    function sendData(e) {//event




        e.preventDefault(); //prevent normal behaviour of submit button

        const isValid =formValidation();

        if(isValid){//send data after validate

        const newVehicle = {
            TransportID,
            VehicleRegNo,
            Date,
            DriverName,
            Discription,
            Status,

        }


        
        axios.post("http://localhost:8060/TransportDetail/addT", newVehicle)

            .then(() => {
                alert("Detail Added")

            }).catch((err) => {
                alert(err)
            })


    }
}

        const formValidation =() => {//validation function
        const RegNoErr ={};//state
        let isValid =true;//return boolean value, setting flag

            //validating Vehicle Registration Number
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
                <h1>Assign Vehicle for Transport</h1>
                <form className="mt-5" onSubmit={sendData}>


                    <div className="mb-3">
                        <label for="Transport ID" className="form-label">Transport ID:</label>
                        <input type="text" className="form-control" id="regNo" placeholder="ex: T001"
                        pattern="T[0-9]{3}" required
                            onChange={(e) => {
                                setID(e.target.value); // assign value
                            }}

                        ></input>
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
                        //display error
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
                        <label for="DriverName" className="form-label">Driver Name :</label>
                        <input type="DriverName" className="form-control" id="DriverName" placeholder="DriverName"
                            onChange={(e) => {
                                setName(e.target.value); // assign value
                            }}

                        ></input>
                    </div>
                    <div className="mb-3">
                        <label for="Discription" className="form-label">Discription :</label>
                        <input type="Discription" className="form-control" id="Discription" placeholder="Discription"
                            onChange={(e) => {
                                setDescription(e.target.value);  // assign value
                            }}

                        ></input>
                    </div>
                    <div className="mb-4">
                        <label for="Status" className="form-label">Status :   </label>
                        {/* <input type="Status" className="form-control" id="Status" placeholder="Status"
                            onChange={(e) => {
                                setStatus(e.target.value);  // assign value
                            }}

                        >

                        </input> */}
                            
                                <select  className="w-50 h-25 ml-5 btn  dropdown"
                                      onChange={(e) => {
                                        setStatus(e.target.value);  // assign value
                                    }}
        
                                >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                </select>
                                {/* <DropdownButton id="dropdown-basic-button" title="Select delivery Status"
                                
                                             onChange={(e) => {
                                             setStatus(e.target.value);  // assign value
                                              }}
                                
                                >
                                    <Dropdown.Item value="Pending">Pending</Dropdown.Item>
                                    <Dropdown.Item value="Completed">Completed</Dropdown.Item>
                                  
                                </DropdownButton> */}
                    </div>

                    <button type="submit" className="btn btn-primary mt-4" >Submit</button>
                    <Link className="btn btn-primary ml-4 mt-4" role="button" to="/AllT">View Transport Details</Link>
                </form>
            </div>
        </div>
        
    )


    

}