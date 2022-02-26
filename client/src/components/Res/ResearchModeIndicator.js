import React from "react";

import "../../styles/Res/ResearchModeIndicator.css";

import { useStateProviderValue } from "../../utils/StateProvider";

function ResearchModeIndicator() {
  const [{ researchModeFormProgress }] = useStateProviderValue();
  return (
    <div className="research__indicator__container">
      <div
        className={`research__indicator__check__point ${
          researchModeFormProgress >= 1 ? "completed__check__point" : ""
        }`}
      ></div>
      <div
        className={`research__indicator__connector ${
          researchModeFormProgress >= 1
            ? "completed__indicator__connector "
            : ""
        }`}
      ></div>

      <div
        className={`research__indicator__check__point ${
          researchModeFormProgress >= 2 ? "completed__check__point" : ""
        }`}
      ></div>
      <div
        className={`research__indicator__connector ${
          researchModeFormProgress >= 2
            ? "completed__indicator__connector "
            : ""
        }`}
      ></div>

      <div
        className={`research__indicator__check__point ${
          researchModeFormProgress >= 3 ? "completed__check__point" : ""
        }`}
      ></div>
      <div
        className={`research__indicator__connector ${
          researchModeFormProgress >= 3
            ? "completed__indicator__connector "
            : ""
        }`}
      ></div>

      <div
        className={`research__indicator__check__point ${
          researchModeFormProgress >= 4 ? "completed__check__point" : ""
        }`}
      ></div>
    </div>
  );
}

export default ResearchModeIndicator;
