import React from "react";

import "../../styles/Res/ResearchMode.css";

// Components
import ResearchModeIndicator from "./ResearchModeIndicator";
import ResearchForm from "./ResearchForm";
import Loader from "../Loader";
import SomethingWentWrong from "../SomethingWentWrong";

function ResearchMode() {
  return (
    <section>
      <ResearchModeIndicator />

      <ResearchForm />
    </section>
  );
}

export default ResearchMode;
