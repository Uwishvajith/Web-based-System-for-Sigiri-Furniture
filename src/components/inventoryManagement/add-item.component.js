import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemname = this.onChangeItemname.bind(this);
    this.onChangeItemcode = this.onChangeItemcode.bind(this);
    this.onChangeSuppliername = this.onChangeSuppliername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemname: "",
      itemcode: "",
      suppliername: "",
    };
  }

  onChangeItemname(e) {
    this.setState({
      itemname: e.target.value,
    });
  }

  onChangeItemcode(e) {
    this.setState({
      itemcode: e.target.value,
    });
  }

  onChangeSuppliername(e) {
    this.setState({
      suppliername: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const items = {
      itemname: this.state.itemname,
      itemcode: this.state.itemcode,
      suppliername: this.state.suppliername,
    };

    console.log(items);

    axios
      .post("http://localhost:8060/items/add", items)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      
    window.alert("Item added successfully!")
    window.location = "./addInventory";

    this.setState({
      itemname: "",
      itemcode: "",
      suppliername: "",
    });
  }

  render() {
    return (
      /*<div>
            <h3>Create new Item</h3>
            <br/>
            <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> </div>
                  <label>Item name: </label>
                  <input type="text"
                         required
                         className="form-control"
                         value={this.state.itemname}
                         onChange={this.onChangeItemname}
                    />
                </div>

                <div className="form-group">
                  <label>Item code: </label>
                  <input type="text"
                         required
                         className="form-control"
                         value={this.state.itemcode}
                         onChange={this.onChangeItemcode}
                    />
                  
                </div>

                
                <div className="form-group">
                  <label>Supplier: </label>
                  <input type="text"
                         required
                         className="form-control"
                         value={this.state.suppliername}
                         onChange={this.onChangeSuppliername}
                    />
                </div>
                  
                <div className="form-group">
                    <input type="submit" value="Create New Item" className="btn btn-primary"/>
                </div>
            </form>
            </div>
            
        </div>   */

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
        <h3>Create new Item</h3>
        <br />
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>ItemName</label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.itemname}
                onChange={this.onChangeItemname}
              />
            </div>

            <div className="form-group">
              <label>ItemCode</label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.itemcode}
                onChange={this.onChangeItemcode}
              />
            </div>

            <div className="form-group">
              <label>Supplier</label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.suppliername}
                onChange={this.onChangeSuppliername}
              />
            </div>
            <input type="submit" value="Add item" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }
}
