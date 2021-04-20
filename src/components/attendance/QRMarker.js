import React from "react";
import QrReader from "react-qr-reader";
import { markAttendance } from "../../services/attendanceService";

export default function QRMarker() {
  let isMarked = false;
  const handleScan = async (data) => {
    if (!isMarked && data) {
      isMarked = true;
      console.log("User Signed In Request Initiated!");
      await markAttendance(data.trim());
      console.log("User Signed In Request Completed!");
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2 className="qr-txt text-center">Place Your QR Code Here</h2>
      <div class="qrReader">
        <QrReader
          class="qrReader"
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
}
