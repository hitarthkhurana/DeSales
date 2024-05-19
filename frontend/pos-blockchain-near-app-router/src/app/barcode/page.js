"use client";

import { useState, useRef } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";

const BarcodePage = () => {
  const [detectedBarcode, setDetectedBarcode] = useState(null);
  const scannerRef = useRef(null);

  const handleBarcodeDetect = (barcode) => {
    setDetectedBarcode(barcode);
    console.log(barcode);
    if (scannerRef.current) {
      scannerRef.current.stopBarcodeScanner();
    }
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
        <BarcodeScanner
          ref={scannerRef}
          onBarcodeDetect={handleBarcodeDetect}
        />
        {detectedBarcode && <p>Detected Barcode: {detectedBarcode}</p>}
      </div>
    </div>
  );
};

export default BarcodePage;
