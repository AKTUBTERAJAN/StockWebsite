import React from 'react';
function Hero() {
    const blogs = [
    {
      id: 1,
      title: "5 Trading Strategies Every Beginner Should Know",
      date: "June 15, 2026",
      category: "Trading",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      description:
        "Learn the essential trading strategies that can help beginners navigate the stock market confidently.",
    },
    {
      id: 2,
      title: "Understanding Risk Management in Trading",
      date: "June 10, 2026",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938",
      description:
        "Risk management is the key to long-term success. Discover techniques to protect your capital.",
    },
    {
      id: 3,
      title: "Top Market Trends to Watch This Year",
      date: "June 05, 2026",
      category: "Market News",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/266/565/large_2x/successful-stock-market-statistical-information-and-trends-with-up-arrows-futuristic-financial-trading-chart-economic-information-growth-background-vector.jpg",
      description:
        "Stay informed about emerging market trends and opportunities for investors and traders.",
    },
  ];

    return ( 
       <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">T-Connect</h1>
        <p className="lead text-muted">
          Insights, Market Updates, Trading Tips, and Financial Knowledge from
          TradePath.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="card shadow-lg border-0 mb-5">
        <div className="card-body text-center p-5">
          <h2>Featured Article</h2>
          <h3 className="mt-3">
            Mastering Stock Market Trading: A Complete Beginner's Guide
          </h3>
          <p className="text-muted">
            Learn the fundamentals of investing, technical analysis, and risk
            management to start your trading journey.
          </p>

          <button className="btn btn-dark">
            Read Article
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <h2 className="mb-4">Latest Articles</h2>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card shadow-sm h-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <span className="badge bg-dark mb-2">
                  {blog.category}
                </span>

                <h5>{blog.title}</h5>

                <small className="text-muted">
                  {blog.date}
                </small>

                <p className="mt-3">
                  {blog.description}
                </p>

                <button className="btn btn-outline-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-light rounded p-5 mt-5 text-center">
        <h2>Subscribe to T-Connect</h2>
        <p>
          Get the latest market updates, trading tips, and investment insights
          directly in your inbox.
        </p>

        <div
          className="d-flex justify-content-center gap-2 flex-wrap"
        >
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            style={{ maxWidth: "350px" }}
          />

          <button className="btn btn-dark">
            Subscribe
          </button>
        </div>
      </div>
    </div>
     );
}

export default Hero;