import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <div>
      <div class="component-body">
        <div class="dashboard">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <a href="/empList">
                  <button type="button" class=" dbutton" id="btn-dash">
                    <i class="fa fb fa-group" id="fa fa-2x"></i>
                    <span class="lead align-top ">Employee Management</span>
                  </button>
                </a>
              </div>
              <div class="col-sm">
                <a href="/viewVehicle">
                  <button type="button" class="dbutton" id="btn-dash">
                    <i class="fa fb fa-truck mr-4" id="fa fa-2x"></i>
                    <span class="lead align-top">Transport Management</span>
                  </button>
                </a>
              </div>
              <div class="col-sm">
                <a href="/ViewFinancial">
                  <button type="button" class="dbutton" id="btn-dash">
                    <i class="fa fb fa-money mr-4" id="fa fa-2x"></i>
                    <span class="lead align-top">Financial Management</span>
                  </button>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <Link to="/allCustomer">
                  <button type="button" class=" dbutton" id="btn-dash">
                    <i class="fa fb fa-shopping-cart pr-5"></i>
                    <span class="lead align-top ">Order Management</span>
                  </button>
                </Link>
              </div>
              <div class="col-sm">
                <Link to="/allview">
                  <button type="button" class="dbutton" id="btn-dash">
                    <i class="fa fb fa-percent mr-4" id="fa fa-2x"></i>
                    <span class="lead align-top">Promotion Management</span>
                  </button>
                </Link>
              </div>
              <div class="col-sm">
                <button type="button" class="dbutton" id="btn-dash">
                  <i class="fa fb fa-cubes mr-4" id="fa fa-2x"></i>
                  <span class="lead align-top">Supply Management</span>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <Link to="/inventory">
                  <button type="button" class="dbutton" id="btn-dash">
                    <i class="fa fb fa-line-chart mr-4" id="fa fa-2x"></i>
                    <span class="lead align-top">Inventory Management</span>
                  </button>
                </Link>
              </div>
              <div class="col-sm">
                <a href="/view">
                  <button type="button" class=" dbutton" id="btn-dash">
                    <i class="fa fb fa-tasks mr-4" id="fa fa-2x"></i>
                    <span class="lead align-top">Production Management</span>
                  </button>
                </a>
              </div>
              <div class="col-sm">
                <a href="/">
                  <button type="button" class=" dbutton" id="btn-dash">
                    <i class="fa fb fa-sign-out pr-5"></i>
                    <span class="lead align-top">Exit</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
