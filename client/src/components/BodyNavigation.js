import React from "react";

import "../styles/BodyNavigation.css";

function BodyNavigation() {
  return (
    <nav className="body__mode__top__navigation">
      <div className="body__mode__logo">College Tracker</div>
      <ul>
        <li>
          <a href="" className="active-mode">
            Research Mode
          </a>
        </li>

        <li>
          <a href="">View Mode</a>
        </li>
      </ul>
    </nav>
  );
}

export default BodyNavigation;
