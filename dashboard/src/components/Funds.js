import React, { useEffect, useState } from "react";
import {
  addPaperFunds,
  formatMoney,
  getAvailableCash,
  getPaperAccount,
  withdrawPaperFunds,
} from "../paperTrading";

const Funds = () => {
  const [account, setAccount] = useState(getPaperAccount());
  const [amount, setAmount] = useState(10000);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const refreshAccount = () => setAccount(getPaperAccount());
    window.addEventListener("paperTrading:update", refreshAccount);
    return () => window.removeEventListener("paperTrading:update", refreshAccount);
  }, []);

  const handleAddFunds = () => {
    setMessage("");
    setAccount(addPaperFunds(amount));
    setMessage(`Paper funds added: Rs. ${formatMoney(amount)}`);
  };

  const handleWithdraw = () => {
    setMessage("");
    try {
      setAccount(withdrawPaperFunds(amount));
      setMessage(`Paper funds withdrawn: Rs. ${formatMoney(amount)}`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const availableCash = getAvailableCash(account);

  return (
    <>
      <div className="funds">
        <p>Paper trading funds are active. Add virtual balance to place demo trades.</p>
        <input
          className="fund-input"
          type="number"
          min="1"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <button className="btn btn-green" type="button" onClick={handleAddFunds}>
          Add funds
        </button>
        <button className="btn btn-blue" type="button" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>
      {message && <p className="fund-message">{message}</p>}

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{formatMoney(availableCash)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{formatMoney(account.usedMargin)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{formatMoney(availableCash)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{formatMoney(account.openingBalance)}</p>
            </div>
            <div className="data">
              <p>Withdrawn</p>
              <p>{formatMoney(account.withdrawals)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>{formatMoney(account.payin)}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>Paper trading mode is enabled for equity orders.</p>
            <p>{account.orders.length} demo orders placed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
