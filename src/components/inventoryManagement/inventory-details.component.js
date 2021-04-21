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
      <Link to={"/edit/" + props.inventory._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteInventory(props.inventory._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>;
};

export default class InventoryDetails extends Component {
  constructor(props) {
    super(props);

    this.deleteInventory = this.deleteInventory.bind(this);
    this.state = { inventories: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/inventories/")
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
      .delete("http://localhost:5000/inventories/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      inventories: this.state.inventories.filter((el) => el._id !== id),
    });
  }

  /*inventoryDetails() {
        return this.state.inventories.map(currentInventory => {
            <Inventory inventory={currentInventory} deleteInventory={this.deleteInventory} key={currentInventory._id}/>;
        })
    }
*/

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
                <a href="/inventory">
                  <i className="fa fa-user-plus fa-2x"></i>
                  <span className="nav-text">Inventory</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </a>
              </li>

              <li className="has-subnav">
                <Link to="./item">
                  <i className="fa fa-user-plus fa-2x"></i>
                  <span className="nav-text">Add Item</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
              </li>

              <li className="has-subnav">
                <Link to="/addInventory">
                  <i className="fa fa-user-plus fa-2x"></i>
                  <span className="nav-text">Create Item Log</span>
                  <i className="fa fa-angle-right fa-2x"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h3>Inventory Details</h3>
        <table className="table">
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
                  <td>{inventory.dateofmanufactured}</td>
                  <td>{inventory.lastupdated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
