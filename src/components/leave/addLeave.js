import React, { useState } from "react";
import { addLeave } from "../../services/leaveService";

export default function AddLeave() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [days, setDays] = useState("");
  const [reason, setReason] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newLeave = {
      fName,
      lName,
      from,
      to,
      days,
      reason,
    };

    addLeave(newLeave).then((response) => {
      const message = response.ok
        ? "Leave details insertion successful"
        : "Failed to insert leave details";
      alert(message);
      window.location.reload();
    });
  }

  return (
    <div class="component-body">
      <h2 className="text-center">Add leave details</h2>
      <div className="border bg-secondary my-5 mx-5">
        <div className="my-5 mx-5">
          <form onSubmit={sendData}>
            <div className="row">
              <div className="col-md-6">
                <label for="fName">First name:</label>
                <input
                  required
                  id="fName"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(e) => {
                    setfName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label for="lName">Last name:</label>
                <input
                  required
                  id="lName"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(e) => {
                    setlName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="dob">From:</label>
                <input
                  required
                  id="from"
                  type="date"
                  className="form-control"
                  name="from"
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label for="dob">To:</label>
                <input
                  required
                  id="to"
                  type="date"
                  className="form-control"
                  name="to"
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <label for="dob">Days:</label>
                <input
                  required
                  id="days"
                  type="number"
                  className="form-control"
                  name="days"
                  onChange={(e) => {
                    setDays(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label for="fName">Reason:</label>
                <textarea
                  required
                  className="form-control"
                  id="reason"
                  placeholder="reason"
                  rows="3"
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col py-3 text-center">
                <button type="submit" className="btn btn-primary">
                  add leave
                </button>
              </div>
              <div className="col py-3 text-center">
                <button type="reset" className="btn btn-primary">
                  reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
