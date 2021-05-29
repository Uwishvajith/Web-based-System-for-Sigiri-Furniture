import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Inventory = (props) => {
  <tr>
    <td>{props.inventory.itemcode}</td>
    <td>{props.inventory.itemname}</td>
    <td>{props.inventory.suppliername}</td>
    <td>{props.inventory.quantity}</td>
    <td>{props.inventory.category}</td>
    <td>{props.inventory.description}</td>
    <td>{props.inventory.currentstock}</td>
    <td>{props.inventory.newstock}</td>
    <td>{props.inventory.minrequired}</td>
    <td>{props.inventory.dateofmanufactured.substring(0, 10)}</td>
    <td>{props.inventory.lastupdated.substring(0, 10)}</td>
    <td>
      <button className='edit'><Link to={"/edit/" + props.inventory._id} className="link">edit</Link></button>
      <button className='delete' onClick={()=>{props.deleteInventory(props.inventory._id)}}>Delete</button>

    </td>
  </tr>;
};

export default class InventoryDetails extends Component {
  constructor(props) {
    super(props);

    this.deleteInventory = this.deleteInventory.bind(this);
    this.state = { inventories: [] };
  }


  // anything right before this code
  componentDidMount() {
    axios
      .get("http://localhost:8060/inventories/")
      .then((response) => {
        this.setState({ inventories: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.inventories);
  }

  deleteInventory(id) {
    axios
      .delete("http://localhost:8060/inventories/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      inventories: this.state.inventories.filter((el) => el._id !== id),
    });

    
  }

  inventoryDetails() {
        return this.state.inventories.map(currentInventory => {
            <Inventory inventory={currentInventory} deleteInventory={this.deleteInventory} key={currentInventory._id}/>;
        })
    }


  render() {
    return (
      <div class="component-body">
        <div>
          <div className="area"></div>
          <nav className="main-menu bg-primary">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-home fa-2x"></i>
                  <span className="nav-text">Dashboard</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </a>
              </li>

              <li className="has-subnav">
                <a href="/inventories">
                  <i className="fa fa-cogs fa-2x"></i>
                  <span className="nav-text">Inventory</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </a>
              </li>

              <li className="has-subnav">
                <Link to="./item">
                  <i className="fa fa-plus-square fa-2x"></i>
                  <span className="nav-text">Add Item</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
              </li>

              <li className="has-subnav">
                <Link to="/addInventory">
                  <i className="fa fa-table fa-2x"></i>
                  <span className="nav-text">Create Item Log</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
              </li>

              <li className="has-subnav">
                <Link to="/inventReport">
                  <i className="fa fa-file-pdf-o fa-2x"></i>
                  <span className="nav-text">Reports</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
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

        <a href="/inventReport" class="float-right mb-3 mr-3">
            <button class="btn btn-sm btn-outline-primary">
              <span class="fa fa-file-text-o"></span>
              Report
            </button>
          </a> 

          {

            // adding inventory details 
          }

        <h3>Inventory Details</h3>
        <table className="table" style={{background:"#E3ECFF"}}>
          <thead className="thead-light">
            <tr>
              <th>Itemname</th>
              <th>Itemcode</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Description</th>
              <th>Currentstock</th>
              <th>NewStock</th>
              <th>Minimum</th>
              <th>DateofManufacture</th>
              <th>LastUpdated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...this.state.inventories].map((inventory, index) => {
              console.log(inventory);
              return (
                <tr key={index}>
                  <td>{inventory.itemname}</td>
                  <td>{inventory.itemcode}</td>
                  <td>{inventory.suppliername}</td>
                  <td>{inventory.quantity}</td>
                  <td>{inventory.category}</td>
                  <td>{inventory.description}</td>
                  <td>{inventory.currentstock}</td>
                  <td>{inventory.newstock}</td>
                  <td>{inventory.minrequired}</td>
                  <td>{inventory.dateofmanufactured.substring(0,15
                    )}</td>
                  <td>{inventory.lastupdated.substring(0,15)}</td>
                  <td>
                    
                   <div class="mx-auto mb-0">
                      <button className="edit btn m-2 p-1 w-75"  style={{background:"#d5d9e0"}}>
                        <Link
                        to={"/edit/"+inventory._id} className="link"
                          >Edit
                        </Link>  
                      </button>
                      
                      <button className="delete btn m-2 p-1 w-75" style={{background:"#d5d9e0"}}

                          onClick={()=>{
                          axios.delete("http://localhost:8060/inventories/"+ inventory._id)
                          .then(()=>{
       
                      });
                          axios.get("http://localhost:8060/inventories/")
                          .then((Response)=>{
                            console.log(Response.data);
                            this.setState({
                              inventory:Response.data,
                            });
                          })
                              window.alert("Delete success!") // deleting successful message
                              window.location="/inventories"; // go back to the inventory details page
                        }}>

                       Delete</button> 
                  </div> 
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
