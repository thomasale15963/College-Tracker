import React from "react";
import "../styles/Footer.css";

// Context API
import { useStateProviderValue } from "../utils/StateProvider";

// Helpers
import { getYearForFooter } from "../utils/helpers";

function Footer() {
  const currentYear = getYearForFooter();

  //   const [{ appMode }] = useStateProviderValue();
  return (
    <footer className="footer__container">
      <div className="footer__top__container">
        <span className="footer__copyright">
          College Tracker © {currentYear}
        </span>

        <nav className="footer__navigation">
          <ul>
            <li>Research Mode</li>
            <li>View Mode</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
