import React from "react";
import "../styles/Footer.css";

// Context API
import { useStateProviderValue } from "../utils/StateProvider";

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
            <a href="" className="active-mode">
              Research Mode
            </a>
            |<a href="">View Mode</a>|<a href="">Policy</a>
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
