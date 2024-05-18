"use client";

import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import banana from "../../public/banana.png";

export default function Home() {
  const handleClickEvent = () => {
    alert("Checkout completed!");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center p-5">
      <div className="row">
        <div className="column">
          <NavBar />
        </div>
        <div className="border border-info rounded p-5 text-center">
          <Image src={banana} alt="Banana" height={200} />
          <h1 className="fs-1">1 x Banana</h1>
          <h2 className="fs-1">$ 1.74</h2>
          <button className="btn btn-primary" onClick={handleClickEvent}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
