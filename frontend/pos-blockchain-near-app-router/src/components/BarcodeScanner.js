import { useEffect, useRef, useState } from "react";

const BarcodeScanner = ({ onBarcodeDetect }) => {
  const videoRef = useRef(null);
  let intervalId = useRef(null);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    let intervalId;
    const startBarcodeScanner = async () => {
      if ("BarcodeDetector" in window) {
        const barcodeDetector = new BarcodeDetector();

        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });

          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          intervalId = setInterval(async () => {
            if (videoRef.current) {
              try {
                const barcodes = await barcodeDetector.detect(videoRef.current);
                if (barcodes.length > 0) {
                  onBarcodeDetect(barcodes[0].rawValue);
                }
              } catch (error) {
                console.error("Barcode detection error:", error);
              }
            }
          }, 1000);
        } catch (error) {
          console.error("Error accessing camera:", error);
        }
      } else {
        console.error("Barcode Detection API is not supported in this browser");
      }
    };

    startBarcodeScanner();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [onBarcodeDetect]);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default BarcodeScanner;