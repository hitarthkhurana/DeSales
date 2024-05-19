import { useEffect, useRef } from "react";

const BarcodeScanner = ({ onBarcodeDetect }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startBarcodeScanner = async () => {
      if ("BarcodeDetector" in window) {
        const barcodeDetector = new BarcodeDetector();

        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          videoRef.current.srcObject = stream;

          setInterval(async () => {
            try {
              const barcodes = await barcodeDetector.detect(videoRef.current);
              if (barcodes.length > 0) {
                onBarcodeDetect(barcodes[0].rawValue);
              }
            } catch (error) {
              console.error("Barcode detection error:", error);
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
      if (videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [onBarcodeDetect]);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default BarcodeScanner;
