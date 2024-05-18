"use client";

import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import banana from "../../public/banana.png";
import apple from "../../public/apple.png";
import doritos from "../../public/doritos.png";
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
        // Add more items to the orders array as needed
      ],
    };

    console.log("Checkout completed!", customerData);
  };

  const listOfItems = [
    {
      name: "Banana",
      imgName: banana,
      price: 1.74,
      quantity: 1,
    },
    {
      name: "Apple",
      imgName: apple,
      price: 2.7,
      quantity: 2,
    },
    {
      name: "Doritos",
      imgName: doritos,
      price: 3.99,
      quantity: 4,
    },
  ];
  const totalSum = listOfItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = totalSum * 0.13;
  const totalMoney = totalSum + tax;

  return (
    <div className="container p-5">
      <NavBar />
      <div className="border border-info rounded p-3 text-center">
        <h1 className="fs-2 mb-3">Walmart PoS</h1>
        <div className="column d-flex flex-column align-items-center mb-3">
          <div className="mb-3">
            {listOfItems.map((item) => {
              return (
                <div key={item.name}>
                  <Image src={item.imgName} alt={item.name} height={100} />
                  <h2 className="fs-4">
                    {item.quantity} x {item.name}
                  </h2>
                  <h3 className="fs-5">$ {item.price}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <h4 className="fw-bold">Subtotal: $ {totalSum.toFixed(2)}</h4>
          <h4 className="fw-bold">Tax (13%): $ {tax.toFixed(2)}</h4>
          <h2 className="fw-bold">Total: $ {totalMoney.toFixed(2)}</h2>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleClickEvent}>
          Checkout
        </button>
      </div>
      <div className="text-center mt-3">
        <Link href={"/hello-near"}>Read the APIs</Link>
      </div>
    </div>
  );
}
