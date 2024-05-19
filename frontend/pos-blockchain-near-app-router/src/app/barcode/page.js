"use client";

import { useState } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";

const BarcodePage = () => {
  const [detectedBarcode, setDetectedBarcode] = useState(null);

  const handleBarcodeDetect = (barcode) => {
    setDetectedBarcode(barcode);
    console.log(barcode);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Scan your product via Barcode!</h1>
        <BarcodeScanner onBarcodeDetect={handleBarcodeDetect} />
        {detectedBarcode && <p>Detected Barcode: {detectedBarcode}</p>}
      </div>
    </div>
  );
};

export default BarcodePage;
