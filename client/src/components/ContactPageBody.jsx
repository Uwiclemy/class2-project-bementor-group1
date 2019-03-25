import React from "react";
import "../assets/css/contact-page.css";

const ContactPageBody = props => {
  return (
    <div className="contact-info">
      <h2>BeMentor.</h2>
      <div className="contact-info-address">
        <i className="fas fa-map-marker" />
        <span>
          <p>adresss1</p>
        </span>
      </div>

      <div className="contact-info-email">
        <i className="fas fa-envelope-square" />
        <a href="mailto:info@bementor.be">
          {/* <a href="mailto:info@bementor.be" class="footer-infos"> */}
          <span>info@bementor.be</span>
        </a>
      </div>

      <div className="contact-infos-tel">
        <i className="fas fa-phone" />

        {/* <i class="fa fa-phone" aria-hidden="true" /> */}
        <a href="tel:+32 (0)472 37 78 92;">+32 (0)472 37 78 92</a>
      </div>
    </div>
  );
};

export default ContactPageBody;
