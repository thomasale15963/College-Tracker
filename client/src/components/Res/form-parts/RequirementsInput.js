import React from "react";

// Import Icons
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

function RequirementsInput({ count, removeFunction }) {
  return (
    <section className="requirement__input__container">
      <div className="container-row align-items-center justify-space-between">
        <h3 className="margin-bottom-16">Requirement {count}</h3>
        <div
          onClick={removeFunction}
          className="requirement__remove__button__container"
        >
          <ClearOutlinedIcon />
        </div>
      </div>

      <div className="container-row align-items-center justify-space-between">
        {/* Requirement Name Input */}
        <div className="container-col">
          <label htmlFor="RequirementName" className="research__form__label">
            Requirement Name :
          </label>
          <input
            type="text"
            name="RequirementName"
            id="RequirementName"
            className="research__form__text__input__medium input__item"
          />
          <div id="RequirementNameMessage">Invalid Requirement Name</div>
        </div>
        {/* Requirement Name Input */}

        {/* Requirement Name Input */}
        <div className="container-col">
          <label htmlFor="RequirementInfo" className="research__form__label">
            Requirement Information :
          </label>
          <input
            type="text"
            name="RequirementInfo"
            id="RequirementInfo"
            className="research__form__text__input__medium input__item"
          />
          <div id="RequirementInfoMessage">Invalid Requirement Info</div>
        </div>

        {/* Requirement Name Input */}

        <div className="container-col">
          <label htmlFor="RequirementRemark" className="research__form__label">
            Requirement Remark :{" "}
          </label>
          <input
            name="RequirementRemark"
            id="RequirementRemark"
            type="text"
            className="research__form__text__input__medium input__item"
          />
          <div id="RequirementRemarkMessage">Invalid Requirement Remark</div>
        </div>
      </div>
    </section>
  );
}

export default RequirementsInput;
