import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./index.css";

function AboutusBanner() {
  return (
    <div className="aboutus-banner__container">
      <div className="aboutus-banner">
        <div className="aboutus-heading">
          <h1>
            Hi stranger, Can we be friends? <br />
            Then we think you should get to know more about us 😀
          </h1>
        </div>
        <div className="aboutus-flags display-flex">
          <div className="german-flag">
            <ReactCountryFlag
              countryCode="DE"
              svg
              style={{
                width: "6em",
                height: "6em",
              }}
              title="DE"
            />
          </div>

          <div className="france-flag">
            <ReactCountryFlag
              countryCode="FR"
              svg
              style={{
                width: "6em",
                height: "6em",
              }}
              title="FR"
            />
          </div>

          <div className="france-flag">
            <ReactCountryFlag
              countryCode="ES"
              svg
              style={{
                width: "6em",
                height: "6em",
              }}
              title="ES"
            />
          </div>

          <div className="france-flag">
            <ReactCountryFlag
              countryCode="PT"
              svg
              style={{
                width: "6em",
                height: "6em",
              }}
              title="PT"
            />
          </div>

          <div className="france-flag">
            <ReactCountryFlag
              countryCode="CN"
              svg
              style={{
                width: "6em",
                height: "6em",
              }}
              title="CN"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusBanner;
