"use client";

import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import apple from "../../public/apple.png";
import banana from "../../public/banana.png";
import doritos from "../../public/doritos.png";
import NavBar from "../components/NavBar";
import { Wallet } from "@/wallets/near";
import { utils } from "near-api-js";

function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const checkoutStatus = urlParams.toString();
  const [listOfItems, setListOfItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showDiscountMessage, setShowDiscountMessage] = useState(false);
  const [totalFruits, setTotalFruits] = useState(0);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      setListOfItems(cartItems);
    }
  }, []);

  useEffect(() => {
    const walletInstance = new Wallet({
      networkId: "testnet",
      createAccessKeyFor: "bigpandaproject.testnet",
    });
    walletInstance
      .startUp((signedAccountId) => {
        if (signedAccountId) {
          console.log("Signed in as:", signedAccountId);
        }
      })
      .then((accountId) => {
        if (accountId) {
          console.log("Already signed in:", accountId);
        }
        setWallet(walletInstance);
      });
  }, []);

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

    const storedBarcode = localStorage.getItem("detectedBarcode");
    if (storedBarcode) {
      console.log("GOT EM BOYS:", storedBarcode);

      async function fetchInformation(barcode) {
        const data = await fetch(
          "https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json"
        )
          .then((response) => response.json())
          .catch((error) => console.error("Error:", error));

        return data;
      }

      (async () => {
        const response = await fetchInformation(storedBarcode);
        if (response.product) {
          const productName = response.product.product_name;
          const productImage = response.product.image_url;
          console.log("Product Name:", productName);
          console.log("Product Image:", productImage);
          setListOfItems([
            ...listOfItems,
            {
              name: productName,
              img: productImage,
              price: 1.99,
              quantity: 1,
            },
          ]);
          localStorage.removeItem("detectedBarcode");
        } else {
          console.error("Product not found in the response");
        }
      })();
    }
  }, [listOfItems]);

  const handleClickEvent = async () => {
    const custData = {
      item_description: listOfItems.reduce((description, item) => {
        return description
          ? `${description}, ${item.quantity} x ${item.name}`
          : `${item.quantity} x ${item.name}`;
      }, ""),
      sale_id: 1,
      seller: "bigpandaproject.testnet",
    };

    const priceInNear = utils.format.parseNearAmount(
      (totalMoney / 7.85).toString()
    );

    if (wallet && wallet.isSignedIn()) {
      await wallet
        .callMethod({
          contractId: "bigpandaproject.testnet",
          method: "record_sale",
          args: custData,
          gas: "30000000000000",
          deposit: priceInNear,
        })
        .then((result) => {
          console.log("Transaction successful:", result);
        })
        .catch((error) => {
          console.error("Transaction failed:", error);
        });
    } else {
      console.error("Wallet not signed in or contract not set up");
    }

    window.alert("Checkout completed! Check out the blockchain backend!");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("detectedBarcode");
    window.location.reload();
  };

  // const handleNFTMinting = async () => {
  //   if (totalFruits >= 10) {
  //     try {
  //       const nftMintResult = await wallet.callMethod({
  //         contractId: "hitarth.testnet",
  //         method: "nft_mint",
  //         args: {
  //           token_id: Math.floor(Math.random() * 1000000).toString(),
  //           receiver_id: "sargunbhatti.testnet",
  //           token_metadata: {
  //             title: "Healthy Grocery is GOOD, get a NFT for it!",
  //             description: "POS NFT",
  //             media:
  //               "https://ipfs.io/ipfs/QmUxR9yhJvyapM8LWaMJDhcV9JYDYZtSkT3cJSbD5yroGZ/DALL·E%202024-05-19%2006.49.09%20-%20A%20digital%20image%20representing%20an%20NFT%20for%20a%20grocery%20order%20crypto%20wallet.%20The%20background%20should%20include%20elements%20like%20shopping%20carts,%20grocery%20items%20(appl.webp",
  //             copies: 1,
  //           },
  //         },
  //         gas: "30000000000000",
  //         deposit: "1000000000000000000000000",
  //       });

  //       console.log("NFT minting successful:", nftMintResult);
  //     } catch (error) {
  //       console.error("Transaction failed:", error);
  //     }
  //   } else {
  //     window.alert(
  //       "You need to have more than 10 fruits in your cart to mint an NFT!"
  //     );
  //   }
  // };

  const handleAddToCart = () => {
    if (selectedProduct && selectedQuantity > 0) {
      const newItem = {
        name: selectedProduct.name,
        img: selectedProduct.img,
        price: selectedProduct.price,
        quantity: selectedQuantity,
      };

      const existingItemIndex = listOfItems.findIndex(
        (item) => item.name === selectedProduct.name
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        updatedItems = [...listOfItems];
        updatedItems[existingItemIndex].quantity += selectedQuantity;
      } else {
        updatedItems = [...listOfItems, newItem];
      }

      setListOfItems(updatedItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    }
  };

  const handleClearCart = () => {
    setListOfItems([]);
    setShowDiscountMessage(false);
    localStorage.removeItem("cartItems");
  };

  const allItems = [
    {
      name: "Banana",
      img: banana,
      price: 1.74,
    },
    {
      name: "Apple",
      img: apple,
      price: 2.7,
    },
    {
      name: "Doritos",
      img: doritos,
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
  console.log(checkoutStatus);

  return (
    <div className="container p-5">
      {checkoutStatus && (
        <div className="alert alert-success mt-3 text-center">
          You have Checked Out!
        </div>
      )}
      <NavBar />
      <div className="border border-info rounded p-3">
        <h1 className="fs-2 mb-3 text-center">DeSales Self-Checkout</h1>
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
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
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
              {/* <button
                className="btn btn-primary mt-3"
                onClick={handleNFTMinting}
              >
                Mint NFT
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {showDiscountMessage && (
        <div className="alert alert-success mt-3 text-center">
          You have 10 or more fruits in your cart! You get a 30 cents discount!
        </div>
      )}
    </div>
  );
}

export default Home;
