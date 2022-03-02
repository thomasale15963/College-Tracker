import React from "react";
import "../styles/Footer.css";

// Helpers
import { getYearForFooter } from "../utils/helpers";

function Footer() {
  const currentYear = getYearForFooter();

  // const [{ appMode }] = useStateProviderValue();
  return (
    <footer className="footer__container">
      <div className="footer__top__container">
        <div className="footer__copyright">College Tracker © {currentYear}</div>

        <nav className="footer__navigation">
          <ul>
            <a className="active-mode">Research Mode</a>|<a>View Mode</a>|
            <a>Policy</a>
          </ul>
        </nav>
      </div>

      <hr />
      <div className="footer__bottom__container">
        Designed & Built by Thomas Alemayehu
      </div>
    </footer>
  );
}

export default Footer;
