import React, { useState } from "react";

export default function RemoveEmployee() {
  return (
    <div className="border bg-light my-5 mx-5">
      <div className="my-5 mx-5">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Employee ID:</label>
            <input
              type="text"
              class="form-control"
              id="empId"
              placeholder="ID"
            />
          </div>
          <div class="form-group">
            <label for="empName">Employee Name:</label>
            <input
              type="text"
              class="form-control"
              id="empName"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="nic">NIC:</label>
            <input
              type="text"
              class="form-control"
              id="empNIC"
              placeholder="NIC"
            />
          </div>
          <div class="form-group">
            <label for="reason">Reason For Resigning:</label>
            <textarea class="form-control" id="reason" rows="3"></textarea>
          </div>
          <div class="row">
            <div class="col text-center">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
            <div class="col text-center">
              <button type="reset" class="btn btn-primary">
                reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
