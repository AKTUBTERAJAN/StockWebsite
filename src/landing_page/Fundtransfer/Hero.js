import React from 'react';
import {useState} from 'react';

function Hero() {
     const [formData, setFormData] = useState({
    amount: "",
    transferType: "Deposit",
    accountNumber: "",
  });

  const [transactions] = useState([
    {
      id: 1,
      type: "Deposit",
      amount: "₹10,000",
      date: "19 Jun 2026",
      status: "Success",
    },
    {
      id: 2,
      type: "Withdrawal",
      amount: "₹5,000",
      date: "18 Jun 2026",
      status: "Pending",
    },
    {
      id: 3,
      type: "Deposit",
      amount: "₹20,000",
      date: "15 Jun 2026",
      status: "Success",
    },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `${formData.transferType} request of ₹${formData.amount} submitted successfully!`
    );

    setFormData({
      amount: "",
      transferType: "Deposit",
      accountNumber: "",
    });
  };

  return ( 
        <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Fund Transfer</h1>
        <p className="text-muted">
          Deposit or withdraw funds securely from your TradePath account.
        </p>
      </div>

      <div className="row">
        {/* Transfer Form */}
        <div className="col-lg-5 mb-4">
          <div className="card shadow border-0">
            <div className="card-body">
              <h3 className="mb-4">Transfer Funds</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Transfer Type
                  </label>

                  <select
                    className="form-select"
                    name="transferType"
                    value={formData.transferType}
                    onChange={handleChange}
                  >
                    <option value="Deposit">Deposit</option>
                    <option value="Withdrawal">
                      Withdrawal
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Amount (₹)
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Bank Account Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Account Summary */}
        <div className="col-lg-7">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5>Available Balance</h5>
                  <h2>₹50,000</h2>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5>Invested Amount</h5>
                  <h2>₹1,20,000</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h4>Fund Transfer Information</h4>

              <ul className="mt-3">
                <li>Minimum deposit amount: ₹100</li>
                <li>Withdrawals processed within 24 hours</li>
                <li>No hidden transfer charges</li>
                <li>Secure bank-level encryption</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="mt-5">
        <h2 className="mb-4">Recent Transactions</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "Success"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     );
}

export default Hero;