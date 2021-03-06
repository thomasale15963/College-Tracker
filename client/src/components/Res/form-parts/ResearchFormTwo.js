import React from "react";

import { useStateProviderValue } from "../../../utils/StateProvider";

// Import Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

// Import Form Event Handlers
import {
  moreInfoRemoveErrors,
  moreInfoComplete,
} from "../../../utils/formEventFunctions";

import {
  saveToSessionStorage,
  getFromSessionStorage,
} from "../../../utils/helpers";

//
import { useNavigate } from "react-router-dom";

// Import Components
import RequirementsInput from "./RequirementsInput";
import RemarkInput from "./RemarkInput";

function ResearchFormTwo() {
  let navigate = useNavigate();

  const [
    { requirementsNumberCount, remarkNumberCount, researchModeFormProgress },
    dispatch,
  ] = useStateProviderValue();
  const requirementsNumberCountArray = [
    ...Array(requirementsNumberCount).keys(),
  ];
  const remarkNumberCountArray = [...Array(remarkNumberCount).keys()];

  function addRequirementInput() {
    dispatch({
      type: "INCREASE_REQUIREMENT_INPUT",
      requirementsNumberCount: requirementsNumberCount + 1,
    });
  }

  function addRemarkInput() {
    dispatch({
      type: "INCREASE_REMARK_INPUT",
      remarkNumberCount: remarkNumberCount + 1,
    });
  }

  function removeRequirementInput() {
    dispatch({
      type: "DECREASE_REQUIREMENT_INPUT",
      requirementsNumberCount:
        requirementsNumberCount > 0 ? requirementsNumberCount - 1 : 0,
    });
  }

  function removeRemarkInput() {
    dispatch({
      type: "DECREASE_REMARK_INPUT",
      remarkNumberCount: remarkNumberCount > 0 ? remarkNumberCount - 1 : 0,
    });
  }

  function handleNextButton() {
    const result = moreInfoComplete();
    var researchModeCacheData = JSON.parse(
      getFromSessionStorage("researchModeCacheData")
    );
    if (result) {
      const researchModeCacheDataUpdate = {
        ...researchModeCacheData,
        ...result,
      };

      saveToSessionStorage(
        "researchModeCacheData",
        researchModeCacheDataUpdate
      );

      if (researchModeFormProgress < 2) {
        dispatch({
          type: "RESEARCH_MODE_FORM_NEXT",
          researchModeFormProgress: researchModeFormProgress + 1,
        });
      }

      navigate("/form-three");
    }
  }
  return (
    <section className="research__form__two__container">
      <h1 className="research__form__heading__title">2. More Information</h1>

      <div className="container-row align-items-center justify-space-between margin-top-32">
        {/* Cost Input Start */}

        <div className="container-col">
          <label htmlFor="UniversityCost" className="research__form__label">
            Cost :<span>*</span>
          </label>
          <input
            type="number"
            className="research__form__text__input__medium input__item"
            name="UniversityCost"
            placeholder="3000"
            id="UniversityCost"
            onChange={moreInfoRemoveErrors}
          />
          <div id="UniversityCostMessage">Invalid Cost Value</div>
        </div>
        <div className="container-col">
          <label htmlFor="UniversityCurrency" className="research__form__label">
            Currency :<span>*</span>
          </label>
          <select
            name="UniversityCurrency"
            id="UniversityCurrency"
            className="research__form__text__input__small input__item"
            defaultValue="Birr"
            onChange={moreInfoRemoveErrors}
          >
            <option value="USD">USD</option>
            <option value="Euro">Euros</option>
            <option value="ASD">ASD</option>
            <option value="CAD">CAD</option>
            <option value="Birr">Birr</option>
            <option value="Other">Other</option>
          </select>
          <div id="UniversityCurrencyMessage">Invalid Cost Currency</div>
        </div>

        {/* Cost Input End */}

        {/* Acceptance Input Start */}
        <div className="container-col">
          <label
            htmlFor="UniversityAcceptance"
            className="research__form__label"
          >
            Acceptance :
          </label>
          <input
            type="number"
            className="research__form__text__input__medium input__item"
            name="UniversityAcceptance"
            placeholder="30"
            id="UniversityAcceptance"
            onChange={moreInfoRemoveErrors}
          />
          <div id="UniversityAcceptanceMessage">Invalid Acceptance Rate</div>
        </div>
        {/* Acceptance Input End */}

        {/* Loan Status Input Start */}
        <div className="container-col align-items-start justify-space-between">
          <label htmlFor="" className="research__form__label">
            Loan Status :
          </label>
          <div className="container-row margin-top-6">
            <div className="container-row align-items-center margin-right-12">
              <label
                htmlFor="Yes"
                className="margin-right-6 research__form__label"
              >
                Yes :
              </label>
              <input
                type="radio"
                name="LoanStatus"
                value="Yes"
                id="LoanStatusYes"
                className="radio__input"
              />
            </div>
            <div className="container-row align-items-center">
              <label
                htmlFor="Yes"
                className="margin-right-6 research__form__label"
              >
                No :
              </label>
              <input
                type="radio"
                name="LoanStatus"
                value="No"
                id="LoanStatusNo"
                className="radio__input"
              />
            </div>
          </div>
          <div id="LoanStatusMessage">Invalid Loan Status</div>
        </div>

        {/* Loan Status Input End */}
      </div>

      {requirementsNumberCountArray.map((item) => (
        <RequirementsInput
          key={item}
          count={item + 1}
          removeFunction={removeRequirementInput}
        />
      ))}

      {/* Add More Button */}
      <div
        className="container-row align-items-center research__form__two__requirement__add__button__container"
        onClick={addRequirementInput}
      >
        <AddOutlinedIcon />
        <div>Add New Requirement</div>
      </div>

      {remarkNumberCountArray.map((item) => (
        <RemarkInput
          key={item}
          count={item + 1}
          removeFunction={removeRemarkInput}
        />
      ))}

      {/* Add More Button */}
      <div
        className="container-row align-items-center research__form__two__requirement__add__button__container"
        onClick={addRemarkInput}
      >
        <AddOutlinedIcon />
        <div>Add New Remark</div>
      </div>

      <div className="container-col align-items-end">
        <div
          className="research__form__button__link"
          onClick={handleNextButton}
        >
          Next
        </div>
      </div>
    </section>
  );
}

export default ResearchFormTwo;
