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
    <div>
      <h1>Barcode Scanner</h1>
      <BarcodeScanner onBarcodeDetect={handleBarcodeDetect} />
      {detectedBarcode && <p>Detected Barcode: {detectedBarcode}</p>}
    </div>
  );
};

export default BarcodePage;
