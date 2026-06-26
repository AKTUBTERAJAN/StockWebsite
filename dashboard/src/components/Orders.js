import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatMoney, getPaperAccount } from "../paperTrading";

const Orders = () => {
  const [orders, setOrders] = useState(getPaperAccount().orders);

  useEffect(() => {
    const refreshOrders = () => setOrders(getPaperAccount().orders);
    window.addEventListener("paperTrading:update", refreshOrders);
    return () => window.removeEventListener("paperTrading:update", refreshOrders);
  }, []);

  if (orders.length > 0) {
    return (
      <>
        <h3 className="title">Paper Orders ({orders.length})</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Margin</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{formatMoney(order.price)}</td>
                  <td>{order.mode}</td>
                  <td>{formatMoney(order.margin)}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any paper orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
