import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function ViewTenderRestock() {
  const { tenderid } = useParams();

  const [Tenders, setTenders] = useState({});

  useEffect(() => {
    loadTender();
  }, []);

  const loadTender = async () => {
    await axios
      .get(`http://localhost:8070/Tender/get/${tenderid}`)
      .then((res) => {
        console.log(res.data);
        setTenders(res.data.Tenders);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div className="container ay-4">
        <br></br>
        <h1 className="display-4" style={{ fontSize: 30, top: 70 }}>
          Supplier Detail
        </h1>
        <hr />
        <br></br>

        <ul className="list-group">
          <table style1={{ width: 800 }}>
            <tr>
              <td>
                <li className="list-group-item">Tender Id</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.tenderid}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">Supplier Id</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.supp_id}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">ItemCode</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.itemcode}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">Type</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.type}</li>
              </td>
            </tr>
            <tr>
              <td>
                <li className="list-group-item">Description</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.description}</li>
              </td>
            </tr>

            <tr>
              <td>
                <li className="list-group-item">Quantity</li>
              </td>
              <td>
                <li className="list-group-item">{Tenders.quantity}</li>
              </td>
            </tr>
          </table>
        </ul>
      </div>
    </div>
  );
}
