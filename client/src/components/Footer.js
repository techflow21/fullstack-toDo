import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h3>All Rights reserved. SOB-Tech &copy; 2022.</h3>
      <ul className="footer__list">
        <li className="list__item">
          <a className="green" href="https://wa.me/2348111703092">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li className="list__item">
          <a
            className="dark-blue"
            href="https://twitter.com/dokthorb"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="list__item">
          <a className="blue" href="https://www.facebook.com/dokthorb">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="list__item">
          <a className="dark-blue" href="https://github.com/techflow21">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="list__item">
          <a className="blue" href="https://linkedin.com/dokthorb">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
