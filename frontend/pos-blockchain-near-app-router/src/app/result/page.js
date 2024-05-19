"use client";

import { useRouter } from "next/router";

const ResultPage = () => {
  const router = useRouter();
  const { barcode } = router.query;

  return (
    <div>
      <h1>Result Page</h1>
      <p>Detected Barcode: {barcode}</p>
    </div>
  );
};

export default ResultPage;
