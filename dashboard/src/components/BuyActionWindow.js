import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import { API_URL } from "../auth";
import { formatMoney, placePaperOrder } from "../paperTrading";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [message, setMessage] = useState("");

  const handleBuyClick = () => {
    try {
      const order = placePaperOrder({
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      axios.post(`${API_URL}/newOrder`, order).catch(() => {});
      GeneralContext.closeBuyWindow();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(event) => setStockQuantity(Number(event.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              onChange={(event) => setStockPrice(Number(event.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required Rs. {formatMoney(stockQuantity * stockPrice)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
      {message && <p className="order-message">{message}</p>}
    </div>
  );
};

export default BuyActionWindow;
