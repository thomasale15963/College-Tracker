import React from "react";

import "../styles/SomethingWenWrong.css";

//
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import ResearchFormOne from "./Res/form-parts/ResearchFormOne";

function SomethingWentWrong() {
  const navigate = useNavigate();
  function goHome() {
    console.log("Going Home");
    render(<ResearchFormOne></ResearchFormOne>);
  }
  return (
    <section className="error__display__container">
      <div className="container-row align-items-center justify-space-between">
        <div className="container-col align-items-center">
          <div className="error__display__text">
            seems like something went wrong
          </div>
          <div className="error__display__sub__text margin-top-18">
            we are working on it
          </div>

          <div className="error__display__home__button margin-top-32">
            Go Home
          </div>
        </div>

        <div
          className="error__display__image__container"
          onClick={goHome}
        ></div>
      </div>
    </section>
  );
}

export default SomethingWentWrong;
