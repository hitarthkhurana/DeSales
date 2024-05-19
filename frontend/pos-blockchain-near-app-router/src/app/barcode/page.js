"use client";

import { useState, useRef } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BarcodePage = () => {
  const router = useRouter();
  const [detectedBarcode, setDetectedBarcode] = useState(null);
  const scannerRef = useRef(null);

  const handleBarcodeDetect = (barcode) => {
    setDetectedBarcode(barcode);
    if (scannerRef.current) {
      scannerRef.current.stopBarcodeScanner();
    }
    if (typeof barcode === "string") {
      console.log("Detected barcode:", barcode);
      router.push("/");
    } else {
      console.error("Detected barcode is not a string:", barcode);
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
      className="container"
    >
      <div className="column">
        <div className="row">
          <h1>Scan your product via Barcode!</h1>
          <BarcodeScanner
            ref={scannerRef}
            onBarcodeDetect={handleBarcodeDetect}
          />
        </div>
        <div className="row">
          {detectedBarcode && <p>Detected Barcode: {detectedBarcode}</p>}
          <Link href="/">
            <button className="btn btn-primary mt-3">Return to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BarcodePage;
