// onchange()  => Event hanlder used primarily with form element
//                ex. <input>, <textarea>, <select>, <radio>
//                Triggers a function every time the value of the input changes

import React, { useState } from "react";

const Onchange = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="mt-2 text-lg font-semibold">Name: {name}</p>
        </div>

        <div>
          <input
            type="number"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <p className="mt-2 text-lg font-semibold">Quantity: {quantity}</p>
        </div>

        <div>
          <textarea
            value={comment}
            placeholder="Enter comment here..."
            onChange={handleCommentChange}
            className="w-full h-24 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="mt-2 text-lg font-semibold">{comment}</p>
        </div>

        <div>
          <select
            name="Payment option"
            id="payment"
            value={payment}
            onChange={handlePaymentChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select payment option</option>
            <option value="Google Pay">Google Pay</option>
            <option value="Phone Pay">Phone Pay</option>
            <option value="Paytm">Paytm</option>
            <option value="Amzone Pay">Amazon Pay</option>
          </select>
          <p className="mt-2 text-lg font-semibold">{payment}</p>
        </div>

        <div>
          <label>
            <input
              type="radio"
              value="Pick Up"
              checked={shipping === "Pick Up"}
              onChange={handleShippingChange}
            />
            Pick Up
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              value="Delivery"
              checked={shipping === "Delivery"}
              onChange={handleShippingChange}
            />
            Delivery
          </label>
          <p>Shipping: {shipping}</p>
        </div>
      </div>
    </div>
  );
};

export default Onchange;
