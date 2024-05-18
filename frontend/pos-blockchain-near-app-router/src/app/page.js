"use client";

import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Link from "next/link";
import apple from "../../public/apple.png";
import banana from "../../public/banana.png";
import doritos from "../../public/doritos.png";
import NavBar from "../components/NavBar";

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
        listOfItems.map((item) => {
          return {
            orderId: "12345",
            product: item.name,
            quantity: item.quantity,
            price: item.price,
            last4Digits: "1234",
            date: new Date().toISOString(),
          };
        }),
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
      <div className="border border-info rounded p-3">
        <h1 className="fs-2 mb-3 text-center">Walmart PoS</h1>
        <div className="row">
          <div className="col-md-8 d-flex flex-column align-items-center flex-wrap justify-content-center mb-3">
            {listOfItems.map((item) => {
              return (
                <div className="container" key={item.name}>
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col p-1 d-flex justify-content-center">
                      <Image src={item.imgName} alt={item.name} height={100} />
                    </div>
                    <div className="col p-1">
                      <h2 className="fs-4">
                        {item.quantity} x {item.name}
                      </h2>
                      <h3 className="fs-5">$ {item.price}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
            <div className="text-center">
              <h4 className="fw-bold">Subtotal: $ {totalSum.toFixed(2)}</h4>
              <h4 className="fw-bold">Tax (13%): $ {tax.toFixed(2)}</h4>
              <h2 className="fw-bold">Total: $ {totalMoney.toFixed(2)}</h2>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleClickEvent}>
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link href={"/hello-near"}>Read the APIs</Link>
      </div>
    </div>
  );
}
