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
    console.log(barcode);
    if (scannerRef.current) {
      scannerRef.current.stopBarcodeScanner();
    }
    router.push("/");
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
ref ={scannerRef}        onBarcodeDetect={handleBarcodeDetect} />
        {detectedBarcode && <p>Detected Barcode: {detectedBarcode}</p>}
        <Link href="/">
          <button className="btn btn-primary mt-3">
            Return to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BarcodePage;
