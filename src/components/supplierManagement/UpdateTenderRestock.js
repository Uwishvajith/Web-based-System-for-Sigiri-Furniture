import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";

export default function UpdateTenderRestock() {
  const { tenderid } = useParams();

  const [tid, setTid] = useState("");
  const [supp_id, setSuppid] = useState("");
  const [itemcode, setItemcode] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadTender();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newTender = {
      tenderid,
      supp_id,
      itemcode,
      type,
      description,
      quantity,
    };

    await axios
      .put(`https://sigiri-furniture-app.herokuapp.comTender/update/${tenderid}`, newTender)
      .then(() => {
        alert("Tender details update Successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const loadTender = async () => {
    await axios
      .get(`https://sigiri-furniture-app.herokuapp.comTender/get/${tenderid}`)
      .then((res) => {
        console.log(res.data);
        setTid(res.data.Tenders.tenderid);
        setSuppid(res.data.Tenders.supp_id);
        setItemcode(res.data.Tenders.itemcode);
        setType(res.data.Tenders.type);
        setDescription(res.data.Tenders.description);
        setQuantity(res.data.Tenders.quantity);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div>
        <div>
          <div class="area"></div>
          <nav class="main-menu bg-primary">
            <ul>
              <li>
                <a href="/alltenders">
                  <i class="fa fa-home fa-2x"></i>
                  <span class="nav-text">Home</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="/adds">
                  <i class="fa fa-user-plus fa-2x"></i>
                  <span class="nav-text">Add Supplier</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/s">
                  <i class="fa fa fa-users fa-2x"></i>
                  <span class="nav-text">View Supplier</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/addTender">
                  <i class="	fa fa-cubes fa-2x"></i>
                  <span class="nav-text">Add TenderRestock</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/alltenders">
                  <i class="fa fa-cube fa-2x"></i>
                  <span class="nav-text">View TenderRestock</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/report/tender">
                  <i class="	fa fa-book fa-2x"></i>
                  <span class="nav-text">Tender Report</span>
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
      </div>

      <div className="container" style={{ width: 800, marginTop: 50 }}>
        <h1 style={{ fontSize: 30, top: 70 }}> Update Tender Details</h1>
        <br></br>
        <div
          className="border border-info"
          style={{
            marginBottom: 60,
            borderRadius: 20,
            backgroundColor: "#e7ebe8",
          }}
        >
          <form
            onSubmit={onSubmit}
            style={{
              marginTop: 50,
              marginLeft: 30,
              marginRight: 30,
              height: 700,
            }}
          >
            <legend
              style={{
                fontSize: 36,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 150,
              }}
            >
              {" "}
              UPDATE TENDERRESTOCK DETAILS
            </legend>

            <div className="mb-3">
              <label for="id">Tender Id</label>
              <input
                type="text"
                className="form-control"
                id="tenderid"
                pattern="TI[0-9]{3}"
                value={tenderid}
                onChange={(e) => {
                  setTid(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="supp_id">Supplier Id</label>
              <input
                type="text"
                className="form-control"
                id="supp_id"
                pattern="SM[0-9]{3}"
                value={supp_id}
                onChange={(e) => {
                  setSuppid(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="itemcode">Item Code</label>
              <input
                type="text"
                className="form-control"
                id="itemcode"
                value={itemcode}
                onChange={(e) => {
                  setItemcode(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="type">Type</label>
              <select
                className="form-control"
                id="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
                value={type}
              >
                <option>Tender</option>
                <option>Order</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label for="quantity">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-outline-info mr-4">
                Update Tender Details
              </button>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}
