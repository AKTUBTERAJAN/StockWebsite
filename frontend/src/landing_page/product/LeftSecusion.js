import React from "react";

function LeftSecustion({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 text-muted">
      <div className="row">
        <div className="col-4">
          <img src={imageURL} alt={productName} className="p-5 img-fluid" />
        </div>

        <div className="col-4"></div>

        <div className="col-4 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a
              href={tryDemo}
              style={{ marginLeft: "10px", textDecoration: "none" }}
            >
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href={learnMore}
              style={{ marginLeft: "75px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                alt="App Store"
                style={{ marginLeft: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSecustion;