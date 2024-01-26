import React from "react";
import job from "../../assets/images/Resume review.png";
import dashcertificate from "../../assets/images/dash-certificate-spanish.jpeg";
import spanishone from "../../assets/images/spanish-certificate.jpeg";
import spanishtwo from "../../assets/images/spanish-certificate-two.jpeg";
import "./index.css";
import hospitality from '../../assets/images/hospitality.jpg'
import ServicesdetailsBanner from "../Banner/ServicesdetailsBanner";
const SpanishNews = () => {
  return (
    <>
      <ServicesdetailsBanner
        heading="Unlock Global Opportunities with DASH Language School"
        image={job}
      />

      <section className="spanishnews__container">
        <div className="spanishnews__heading">
          <img src={hospitality} alt="Hospitality" />
          <h2>
            Unlock Global Opportunities: Dash Language School & Instituto IEAE
            Valencia Collaborate to Shape Future Hospitality Leaders
          </h2>
        </div>
        <div className="spanishnews--text">
          <div style={{ margin: "90px 0", width: "70%" }}>
            <iframe
              src="https://jumpshare.com/embed/FpcetmwhG2k7dEHcfFAP"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              title="Dash Video"
              style={{
                width: "100%",
                height: "500px",
              }}
            ></iframe>
          </div>
          <p>
            The Dash Language School and Instituto IEAE Valencia in Spain have
            joined forces to offer a seamless transition to Spain for Nigerian
            students who aspire to pursue studies in the field of catering and
            hospitality in Valencia. Through this partnership, we aim to ease
            the challenges and anxieties associated with relocation, empowering
            people with educational opportunities that have global significance.
          </p>
          <img src={dashcertificate} alt="Dash certificate" />
          <p>
            Our comprehensive program not only includes immersive Spanish
            language instruction but also extends support in handling all
            necessary documentation, visa applications, and processing. Upon
            completion of the one-year catering and hospitality course, we will
            assist you in securing employment and help facilitate the transition
            to a work visa and ultimately permanent residency in Spain. Take the
            first step towards global relevance and explore the world. For more
            information, please send us an email at
            info@dashlanguageschool.com.ng.
          </p>
        </div>
        <div className="spanishnews--images">
          <img
            src={spanishone}
            alt="Spanish Certificate"
            className="spanishnews--big-img"
          />
          <img src={spanishtwo} alt="Spanish Certificate" />
        </div>
      </section>
    </>
  );
};

export default SpanishNews;
