"use client";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Link from "next/link";
import apple from "../../public/apple.png";
import banana from "../../public/banana.png";
import doritos from "../../public/doritos.png";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const barcode = router.query ? router.query.barcode : null;
  const [listOfItems, setListOfItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showDiscountMessage, setShowDiscountMessage] = useState(false);
  const [totalFruits, setTotalFruits] = useState(0);

  useEffect(() => {
    // Calculate the total number of fruits
    const fruitsCount = listOfItems
      .filter((item) => item.name === "Apple" || item.name === "Banana")
      .reduce((total, item) => total + item.quantity, 0);

    setTotalFruits(fruitsCount);

    // Check if the total fruits are 10 or more to show the discount message
    if (fruitsCount >= 10) {
      setShowDiscountMessage(true);
    } else {
      setShowDiscountMessage(false);
    }
  }, [listOfItems]);

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
      orders: listOfItems.map((item) => ({
        orderId: "12345",
        product: item.name,
        quantity: item.quantity,
        price: item.price,
        last4Digits: "1234",
        date: new Date().toISOString(),
      })),
    };

    console.log("Checkout completed!", customerData);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedQuantity > 0) {
      const newItem = {
        name: selectedProduct.name,
        imgName: selectedProduct.imgName,
        price: selectedProduct.price,
        quantity: selectedQuantity,
      };

      const existingItemIndex = listOfItems.findIndex(
        (item) => item.name === selectedProduct.name
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...listOfItems];
        updatedItems[existingItemIndex].quantity += selectedQuantity;
        setListOfItems(updatedItems);
      } else {
        setListOfItems([...listOfItems, newItem]);
      }
    }
  };

  const handleClearCart = () => {
    setListOfItems([]);
    setShowDiscountMessage(false);
  };

  const allItems = [
    {
      name: "Banana",
      imgName: banana,
      price: 1.74,
    },
    {
      name: "Apple",
      imgName: apple,
      price: 2.7,
    },
    {
      name: "Doritos",
      imgName: doritos,
      price: 3.99,
    },
  ];

  const totalSum = listOfItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = totalSum * 0.13;
  const discount = totalFruits >= 10 ? 0.3 : 0;
  const totalMoney = totalSum + tax - discount;

  return (
    <div className="container p-5">
      <NavBar />
      <div className="border border-info rounded p-3">
        <h1 className="fs-2 mb-3 text-center">Walmart PoS</h1>
        <div className="row">
          <div className="offset-md-1 col-md-4">
            <div className="text-center mb-3">
              <h3>Add Product to Cart</h3>
              <select
                className="form-select mb-2"
                value={JSON.stringify(selectedProduct)}
                onChange={(e) => setSelectedProduct(JSON.parse(e.target.value))}
              >
                <option value="">Select Product</option>
                {allItems.map((item, index) => (
                  <option key={index} value={JSON.stringify(item)}>
                    {item.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className="form-control mb-2"
                value={selectedQuantity}
                onChange={(e) =>
                  setSelectedQuantity(parseInt(e.target.value) || 0)
                }
                min={0}
              />
              <div className="d-flex justify-content-between">
                <button className="btn btn-success" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btn btn-danger" onClick={handleClearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
            <div className="row mb-3">
              <Link href="/barcode">OR scan barcode</Link>
            </div>
            <h3>Cart</h3>
            {listOfItems.map((item, index) => (
              <div className="row mb-3" key={index}>
                <div className="col-md-4">
                  <Image src={item.imgName} alt={item.name} width={100} />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>{item.name}</h5>
                    <p>
                      Quantity: {item.quantity} <br />
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col">
            <div className="col-md-4 offset-md-5 d-flex flex-column align-items-center justify-content-center">
              <div className="text-center">
                <h4 className="fw-bold">Subtotal: ${totalSum.toFixed(2)}</h4>
                <h4 className="fw-bold">Tax (13%): ${tax.toFixed(2)}</h4>
                {totalFruits >= 10 && (
                  <h4 className="fw-bold text-success">
                    Discount: -${discount.toFixed(2)}
                  </h4>
                )}
                <h2 className="fw-bold">Total: ${totalMoney.toFixed(2)}</h2>
              </div>
              <button
                className="btn btn-primary mt-3"
                onClick={handleClickEvent}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {showDiscountMessage && (
        <div className="alert alert-success mt-3 text-center">
          You have 10 or more fruits in your cart! You get a 30 cents discount!
        </div>
      )}
      <div className="text-center mt-3">
        <Link href="/hello-near">Read the APIs</Link>
      </div>
    </div>
  );
}