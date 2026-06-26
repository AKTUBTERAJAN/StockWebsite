import React from 'react';
function Hero() {
    const charges = [
    {
      category: "Account Opening",
      charge: "₹0",
      description: "Free account opening",
    },
    {
      category: "Equity Delivery",
      charge: "₹0",
      description: "Zero brokerage on delivery trades",
    },
    {
      category: "Equity Intraday",
      charge: "₹5/order",
      description: "Or 0.03% per executed order, whichever is lower",
    },
    {
      category: "F&O Trading",
      charge: "₹10/order",
      description: "Per executed order",
    },
    {
      category: "Commodity Trading",
      charge: "₹10/order",
      description: "Per executed order",
    },
    {
      category: "Currency Trading",
      charge: "₹10/order",
      description: "Per executed order",
    },
    {
      category: "Account Maintenance (AMC)",
      charge: "₹100/year",
      description: "Annual maintenance charges",
    },
    {
      category: "Fund Withdrawal",
      charge: "₹0",
      description: "No withdrawal charges",
    },
  ];
    return ( 
       <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">List of Charges</h1>
        <p className="text-muted">
          Transparent pricing with no hidden fees.
        </p>
      </div>

      {/* Charges Table */}
      <div className="card shadow border-0">
        <div className="card-body">
          <h3 className="mb-4">TradePath Charges</h3>

          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Category</th>
                  <th>Charge</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {charges.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.charge}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted mt-3">
            * Taxes, statutory charges, GST, SEBI charges, exchange
            transaction charges, and stamp duty may apply as per
            government and exchange regulations.
          </p>
        </div>
      </div>

      {/* Additional Charges */}
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4>Account Services</h4>
              <ul>
                <li>Account Opening: Free</li>
                <li>AMC: ₹100/year</li>
                <li>Account Closure: Free</li>
                <li>Fund Withdrawal: Free</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4>Trading Charges</h4>
              <ul>
                <li>Equity Delivery: ₹0</li>
                <li>Intraday: ₹5/order</li>
                <li>F&O: ₹10/order</li>
                <li>Currency: ₹10/order</li>
                <li>Commodity: ₹10/order</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="card bg-light border-0 mt-4">
        <div className="card-body">
          <h5>Disclaimer</h5>
          <p className="mb-0">
            Charges shown above are indicative and subject to change.
            Please refer to the latest pricing policy before trading.
          </p>
        </div>
      </div>
    </div>
     );
}

export default Hero;