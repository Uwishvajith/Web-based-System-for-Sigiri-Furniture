import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditInventory extends Component {
  constructor(props) {
    super(props);
    this.onChangeItemname = this.onChangeItemname.bind(this);
    this.onChangeItemcode =this.onChangeItemcode.bind(this);
    this.onChangeSuppliername = this.onChangeSuppliername.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
    this.onChangeCurrentstock = this.onChangeCurrentstock.bind(this);
    this.onChangeNewstock = this.onChangeNewstock.bind(this);
    this.onChangeMinrequired = this.onChangeMinrequired.bind(this);
    this.onChangeDateofmanufactured = this.onChangeDateofmanufactured.bind(this);
    this.onChangeLastupdated = this.onChangeLastupdated.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      quantity: '',
      category: '',
      description: '',
      currentstock: '',
      newstock: '',
      minrequired:'',
      dateofmanufactured: new Date(),
      lastupdated: new Date(),
      itemnames: [],
      itemcodes: [],
      suppliernames: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8060/inventories/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          itemname:response.data.itemname,
          itemcode:response.data.itemcode,
          suppliername:response.data.suppliername,
          category: response.data.category,
          quantity: response.data.quantity,
          description: response.data.description,
          currentstock: response.data.currentstock,
          newstock: response.data.newstock,
          minrequired: response.data.minrequired,
          dateofmanufactured: new Date(response.data.dateofmanufactured),
          lastupdated: new Date(response.data.lastupdated),
          
        });
      })

      .catch(function (error) {
        console.log(error);
      });

        axios.get("http://localhost:8060/items/").then(response => {
          if (response.data.length > 0) {
            this.setState({
              itemnames: response.data.map((item) => item.itemname),
              itemcodes: response.data.map((item) => item.itemcode),
              suppliernames: response.data.map((item) => item.suppliername),
              
            });
          }
        });
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

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangeItemDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeCurrentstock(e) {
    this.setState({
      currentstock: e.target.value,
    });
  }

  onChangeNewstock(e) {
    this.setState({
      newstock: e.target.value,
    });
  }

  onChangeMinrequired(e) {
    this.setState({
      minrequired: e.target.value,
    });
  }

  onChangeDateofmanufactured(date) {
    this.setState({
      dateofmanufactured: date,
    });
  }

  onChangeLastupdated(date) {
    this.setState({
      lastupdated: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const inventory = {
      itemname:this.state.itemname,
      itemcode:this.state.itemcode,
      suppliername:this.state.suppliername,
      category: this.state.category,
      quantity: this.state.quantity,
      description: this.state.description,
      currentstock: this.state.currentstock,
      newstock: this.state.newstock,
      minrequired: this.state.minrequired,
      dateofmanufactured: this.state.dateofmanufactured,
      lastupdated: this.state.lastupdated,
    };

    console.log(inventory);
    if(this.state.category.length <= 3){
      this.setState({categoryError:"Category Length must be longer than 3"})
    }
    else if(this.state.quantity <= 0){
      this.setState({quantityError:"Quantity must be more than 0"})
    }
    else if(this.state.currentstock <= 0 ){
      this.setState({currentstockError:"Current stock must be more than 0"})
    }
    else if(this.state.newstock <= 0 ){
      this.setState({newstockError:"New stock must be more than 0"})
    }
    else if(this.state.minrequired <= 0 ){
      this.setState({minrequiredError:"Minimum Required must be more than 0"})
    }
    else if(this.state.category.length > 3 && this.state.quantity.length > 0 && this.state.currentstock.length > 0 && this.state.newstock.length > 0 && this.state.minrequired.length > 0){

    axios.post("http://localhost:8060/inventories/update/" + this.props.match.params.id,inventory)
        .then(res => console.log(res.data));

    window.location = '/inventories';
  }

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
        <h3>Edit Item Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Item name: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.itemname}
              onChange={this.onChangeItemname}
            >
              {this.state.itemnames.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Item code: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.itemcode}
              onChange={this.onChangeItemcode}
            >
              {this.state.itemcodes.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Supplier: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.suppliername}
              onChange={this.onChangeSuppliername}
            >
              {this.state.suppliernames.map(function (item) {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Quantity: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChangeQuantity}
            />
                <p className="validateMsg">{this.state.quantityError}</p>
          </div>

          <div className="form-group">
            <label>Category: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
             <p className="validateMsg">{this.state.categoryError}</p>
          </div>

          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeItemDescription}
            />
          </div>

          <div className="form-group">
            <label>Current stock: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.currentstock}
              onChange={this.onChangeCurrentstock}
            />
            <p className="validateMsg">{this.state.currentstockError}</p>
          </div>

          <div className="form-group">
            <label>New stock: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.newstock}
              onChange={this.onChangeNewstock}
            />
             <p className="validateMsg">{this.state.newstockError}</p>
          </div>

          <div className="form-group">
            <label>Minimum required: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.minrequired}
              onChange={this.onChangeMinrequired}
            />
              <p className="validateMsg">{this.state.minrequiredError}</p>
          </div>

          <div className="form-group">
            <label>Date of manufactured: </label>
            <div>
              <DatePicker
                selected={this.state.dateofmanufactured}
                onChange={this.onChangeDateofmanufactured}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Last updated: </label>
            <div>
              <DatePicker
                selected={this.state.lastupdated}
                onChange={this.onChangeLastupdated}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Item Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
