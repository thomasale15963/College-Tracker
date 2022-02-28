import React from "react";

// Import Icons
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

function ScholarshipRequirement({ count, removeFunction }) {
  return (
    <section className="scholarship__requirement__container">
      <div className="container-row justify-space-between align-items-center">
        <h3 className="margin-bottom-16">Scholarship Requirement {count}</h3>

        <div
          className="scholarship__requirement__remove__button__container"
          onClick={removeFunction}
        >
          <ClearOutlinedIcon />
        </div>
      </div>

      <div className="container-row justify-space-between align-items-center">
        <div className="container-col">
          <label htmlFor="SRequirementName" className="research__form__label">
            Requirement Name :
          </label>
          <input
            type="text"
            name="SRequirementName"
            id="SRequirementName"
            className="research__form__text__input__medium input__item"
          />
          <div id="SRequirementNameMessage">Invalid Requirement Name</div>
        </div>

        <div className="container-col">
          <label
            htmlFor="SRequirementMessage"
            className="research__form__label"
          >
            Requirement Message :
          </label>
          <input
            type="text"
            name="SRequirementMessage"
            id="SRequirementMessage"
            className="research__form__text__input__medium input__item"
          />
          <div id="SRequirementMessageMessage">Invalid Requirement Message</div>
        </div>

        <div className="container-col">
          <label htmlFor="SRequirementRemark" className="research__form__label">
            Requirement Remark :
          </label>
          <input
            type="text"
            name="SRequirementRemark"
            id="SRequirementRemark"
            className="research__form__text__input__medium input__item"
          />
          <div id="SRequirementRemarkMessage">Invalid Requirement Remark</div>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipRequirement;
