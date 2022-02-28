import React from "react";

import "../styles/Loader.css";

function Loader() {
  return (
    <div className="container-col align-items-center justify-space-center loader__container">
      <div className="loader"></div>
      <h4 className="margin-top-16 loader__text">Loading</h4>
    </div>
  );
}

export default Loader;
