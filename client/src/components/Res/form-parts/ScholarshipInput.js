import React from "react";

// Import Global State Provider
import { useStateProviderValue } from "../../../utils/StateProvider";
// Import Icons
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

// Import Components
import ScholarshipRequirement from "./ScholarshipRequirement";

function ScholarshipInput({ count, removeFunction }) {
  const [{ scholarshipRequirementCount }, dispatch] = useStateProviderValue();
  const scholarshipRequirementCountArray = [
    ...Array(scholarshipRequirementCount).keys(),
  ];

  function addScholarshipRequirement() {
    dispatch({
      type: "INCREASE_SCHOLARSHIP_REQUIREMENT_INPUT",
      scholarshipRequirementCount: scholarshipRequirementCount + 1,
    });
  }
  function removeScholarshipRequirement() {
    dispatch({
      type: "DECREASE_SCHOLARSHIP_REQUIREMENT_INPUT",
      scholarshipRequirementCount:
        scholarshipRequirementCount > 0 ? scholarshipRequirementCount - 1 : 0,
    });
  }
  return (
    <section className="scholarship__input__container">
      <div className="container-row align-items-center justify-space-between">
        <h3 className="margin-bottom-16">Scholarship {count} </h3>
        <div
          className="scholarship__remove__button__container"
          onClick={removeFunction}
        >
          <ClearOutlinedIcon />
        </div>
      </div>

      {/* Scholarship Info */}
      <div className="container-row align-items-center justify-space-between">
        {/* Name */}
        <div className="container-col">
          <label htmlFor="ScholarshipName" className="research__form__label">
            Scholarship Name :
          </label>
          <input
            type="text"
            name="ScholarshipName"
            id="ScholarshipName"
            className="research__form__text__input__medium input__item"
          />
          <div id="ScholarshipNameMessage">Invalid Scholarship Name</div>
        </div>
        {/* Name */}

        {/* Type */}
        <div className="container-col">
          <label htmlFor="ScholarshipType" className="research__form__label">
            Scholarship Type :
          </label>
          <select
            name="ScholarshipType"
            id="ScholarshipType"
            className="research__form__text__input__medium input__item"
          >
            <option value="Internal">Internal</option>
            <option value="External">External</option>
            <option value="Unknown">Unknown</option>
          </select>
          <div id="ScholarshipTypeMessage">Invalid Scholarship Type</div>
        </div>
        {/* Type */}

        {/* Value */}
        <div className="container-col">
          <label htmlFor="ScholarshipValue" className="research__form__label">
            Scholarship Value :
          </label>
          <input
            type="number"
            name="ScholarshipValue"
            id="ScholarshipValue"
            className="research__form__text__input__medium input__item"
          />
          <div id="ScholarshipValueMessage">Invalid Scholarship Value</div>
        </div>
        {/* Value */}
      </div>

      <div className="container-row align-items-center justify-space-between margin-top-32">
        {/* Link */}
        <div className="container-col">
          <label htmlFor="ScholarshipLink" className="research__form__label">
            Scholarship Link :
          </label>
          <input
            type="text"
            name="ScholarshipLink"
            id="ScholarshipLink"
            className="research__form__text__input__medium input__item"
          />
          <div id="ScholarshipLinkMessage">Invalid Scholarship Link</div>
        </div>
        {/* Link */}

        {/* Email */}
        <div className="container-col">
          <label htmlFor="ScholarshipEmail" className="research__form__label">
            Scholarship Email :
          </label>
          <input
            type="text"
            name="ScholarshipEmail"
            id="ScholarshipEmail"
            className="research__form__text__input__medium input__item"
          />
          <div id="ScholarshipEmailMessage">Invalid Scholarship Email</div>
        </div>
        {/* Email */}

        {/* Remark */}
        <div className="container-col">
          <label htmlFor="ScholarshipRemark" className="research__form__label">
            Scholarship Remark :
          </label>
          <input
            type="text"
            name="ScholarshipRemark"
            id="ScholarshipRemark"
            className="research__form__text__input__medium input__item"
          />
          <div id="ScholarshipRemarkMessage">Invalid Scholarship Remark</div>
        </div>
        {/* Remark */}
      </div>

      {/* Scholarship Requirement */}
      <div className="margin-32">
        {scholarshipRequirementCountArray.map((item) => (
          <ScholarshipRequirement
            key={item}
            count={item + 1}
            removeFunction={removeScholarshipRequirement}
          />
        ))}
      </div>

      {/* Add More Button */}
      <div
        className="container-row align-items-center research__form__two__requirement__add__button__container margin-top-50"
        onClick={addScholarshipRequirement}
      >
        <AddOutlinedIcon />
        <div>Add New Scholarship Requirement</div>
      </div>
      {/* End */}
    </section>
  );
}

export default ScholarshipInput;
