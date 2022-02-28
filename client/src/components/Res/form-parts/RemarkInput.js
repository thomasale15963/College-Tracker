import React from "react";

// Import Icons
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

function RemarkInput({ count, removeFunction }) {
  return (
    <section className="remark__input__container">
      <div className="container-row align-items-center justify-space-between">
        <h3 className="margin-bottom-16">Remark {count}</h3>
        <div
          className="remark__remove__button__container"
          onClick={removeFunction}
        >
          <ClearOutlinedIcon />
        </div>
      </div>

      <div className="container-row align-items-center justify-space-between">
        {/* Remark Name Start */}
        <div className="container-col">
          <label htmlFor="RemarkName" className="research__form__label">
            Remark Name :
          </label>
          <input
            type="text"
            name="RemarkName"
            id="RemarkName"
            className="research__form__text__input__medium input__item"
          />
          <div id="RemarkNameMessage">Invalid Remark Name</div>
        </div>
        {/* Remark Name End */}

        {/* Remark Type Start */}
        <div className="container-col">
          <label htmlFor="RemarkType" className="research__form__label">
            Remark Type :
          </label>
          <select
            name="RemarkType"
            id="RemarkType"
            className="research__form__text__input__medium input__item"
          >
            <option value="Good">Good</option>
            <option value="Neutral">Neutral</option>
            <option value="Bad">Bad</option>
          </select>
          <div id="RemarkTypeMessage">Invalid Remark Type</div>
        </div>
        {/* Remark Type End */}

        {/* Remark Message Start */}
        <div className="container-col">
          <label htmlFor="RemarkMessage" className="research__form__label">
            Remark Message :
          </label>
          <input
            type="text"
            name="RemarkMessage"
            id="RemarkMessage"
            className="research__form__text__input__medium input__item"
          />
          <div id="RemarkMessageMessage">Invalid Remark Message</div>
        </div>
        {/* Remark Type End */}
      </div>
    </section>
  );
}

export default RemarkInput;
