import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import ProductUpdateForm from "./ProductUpdateForm";

const HOST = "https://sigiri-furniture-app.herokuapp.com/products";

export default function ViewProducts() {
  const [products, setProducts] = useState([]);

  const [modalStateUpdate, setModalStateUpdate] = useState(false);
  const [currentProductUpdate, setCurrentProductUpdate] = useState();

  const [modalStateDelete, setModalStateDelete] = useState(false);
  const [currentProductDelete, setCurrentProductDelete] = useState();

  useEffect(() => {
    axios
      .get(HOST + "/view")
      .then((res) => {
        setProducts(res.data);
        console.log("Data has been received");
      })
      .catch(() => {
        alert("Error while fetching data");
      });
  }, []);

  function onDelete() {
    axios
      .delete(HOST + "/delete/" + currentProductDelete)
      .then((res) => {
        alert(res.data.status);
        window.location.reload(true);
      })
      .catch(() => {
        alert("Error while deleting product");
      });
  }

  return (
    <>
      <div class="">
        <nav class="main-menu bg-primary">
          <ul>
            <li>
              <a href="/add">
                <i class="fa fa-plus-square fa-2x"></i>
                <span class="nav-text">Add New Product</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/view">
                <i class="fa fa-search fa-2x"></i>
                <span class="nav-text">Products</span>
                <i class="fa fa-angle-right fa-2x"></i>
              </a>
            </li>
            <li class="has-subnav">
              <a href="/rawMaterial">
                <i class="fa fa-cogs fa-2x"></i>
                <span class="nav-text">Raw Material</span>
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

      <div class="productiontable">
        <MaterialTable style={{background:"#E3ECFF"}}
          title="Products Table"
          columns={[
            { title: "ID", field: "id", type: "string" },
            { title: "Name", field: "name", type: "string" },
            { title: "Type", field: "type", type: "string" },
            { title: "Price", field: "price", type: "numeric" },
            { title: "Quantity", field: "qty", type: "numeric" },
          ]}
          data={products}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
          actions={[
            {
              icon: () => (
                <button class="btn btn-sm btn-success">Update</button>
              ),
              onClick: (event, rowData) => {
                setCurrentProductUpdate(rowData);
                setModalStateUpdate(true);
              },
            },
            {
              icon: () => <button class="btn btn-sm btn-danger">Delete</button>,
              onClick: (event, rowData) => {
                setCurrentProductDelete(rowData.id);
                setModalStateDelete(true);
              },
            },
          ]}
        />
        <a href="/add">
        <button class="btn btn-primary">+ Add New Product</button>
        </a>
      </div>
      <Modal show={modalStateUpdate}>
        <Modal.Body>
          <ProductUpdateForm
            data={currentProductUpdate}
            cl={() => setModalStateUpdate(false)}
          />
        </Modal.Body>
      </Modal>

      <Modal show={modalStateDelete}>
        <Modal.Body>
          <p>Are you want to delete this item ?</p>
          <button type="button" class="btn btn-success mr-3" onClick={onDelete}>
            Delete Item
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setModalStateDelete(false)}
          >
            Cancel
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
