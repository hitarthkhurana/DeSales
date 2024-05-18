"use client";

import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import banana from "../../public/banana.png";
import Link from "next/link";

export default function Home() {
  const handleClickEvent = () => {
    const customerData = {
      id: "123456",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      orders: [
        {
          orderId: "78901",
          product: "Banana",
          quantity: 1,
          price: 1.74,
          last4Digits: "4534",
          date: new Date().toISOString(),
        },
      ],
    };

    console.log("Checkout completed!", customerData);
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
        <div className="column d-flex align-items-center justify-content-center p-5">
          <Link href={"/hello-near"}>Read the APIs</Link>
        </div>
      </div>
    </div>
  );
}
