import React from "react";

import "../styles/BodyNavigation.css";

function BodyNavigation() {
  return (
    <nav className="body__mode__top__navigation">
      <div className="body__mode__logo">College Tracker</div>
      <ul>
        <li>
          <a className="active-mode">Research Mode</a>
        </li>

        <li>
          <a>View Mode</a>
        </li>
      </ul>
    </nav>
  );
}

export default BodyNavigation;
