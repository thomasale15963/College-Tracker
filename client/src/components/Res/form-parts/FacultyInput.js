import React from "react";

// Import Icons
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

// Import Event Handlers
import {
  advancedInfoImageChange,
  advancedInfoRemoveErrors,
} from "../../../utils/formEventFunctions";

function FacultyInput({ count, removeFunction }) {
  return (
    <section className="faculty__input__container">
      <div className="container-row align-items-center justify-space-between">
        <h3 className="margin-bottom-16">Faculty {count}</h3>
        <div
          className="faculty__remove__button__container"
          onClick={removeFunction}
        >
          <ClearOutlinedIcon />
        </div>
      </div>
      <div className="container-row align-items-center">
        <div className="container-col">
          <img
            src="./assets/img/placeholder-image.jpg"
            alt="faculty look"
            className="faculty__image"
            id="FacultyImage"
            name="FacultyImage"
          />
          <input
            type="file"
            id="FacultyImageInput"
            name="FacultyImageInput"
            className="file__upload__button"
            onChange={advancedInfoImageChange}
          ></input>
        </div>

        <div className="container-col align-items-center">
          {/* Faculty Name Start */}
          <div className="container-col margin-bottom-14">
            <label htmlFor="FacultyName" className="research__form__label">
              Faculty Name :
            </label>
            <input
              type="text"
              name="FacultyName"
              id="FacultyName"
              className="research__form__text__input__medium input__item"
            />
          </div>
          {/* Faculty Name End */}

          {/* Faculty Position Start */}
          <div className="container-col">
            <label htmlFor="FacultyPosition" className="research__form__label">
              Faculty Position :
            </label>
            <input
              type="text"
              name="FacultyPosition"
              id="FacultyPosition"
              className="research__form__text__input__medium input__item"
            />
          </div>
          {/* Faculty Position End */}
        </div>
      </div>
      {/* Info Basics */}
      <div className="container-row align-items-center justify-space-between  margin-top-32">
        {/* Link  */}
        <div className="container-col">
          <label htmlFor="FacultyLink" className="research__form__label">
            Faculty Link :
          </label>
          <input
            type="text"
            name="FacultyLink"
            id="FacultyLink"
            className="research__form__text__input__medium input__item"
          />
        </div>
        {/* Link  */}

        {/* Email  */}
        <div className="container-col">
          <label htmlFor="FacultyEmail" className="research__form__label">
            Faculty Email :
          </label>
          <input
            type="text"
            name="FacultyEmail"
            id="FacultyEmail"
            className="research__form__text__input__medium input__item"
          />
        </div>
        {/* Email  */}

        {/* Educational Level  */}
        <div className="container-col">
          <label htmlFor="FacultyEducation" className="research__form__label">
            Faculty Education :
          </label>
          <input
            type="text"
            name="FacultyEducation"
            id="FacultyEducation"
            className="research__form__text__input__medium input__item"
          />
        </div>
        {/* Email  */}
      </div>
      {/* Info Basics */}

      <div className="container-col margin-top-32">
        <label htmlFor="FacultyInfo" className="research__form__label">
          Faculty Info :
        </label>

        <textarea
          name="FacultyInfo"
          id="FacultyInfo"
          cols="30"
          rows="10"
          className="text__area__input__item"
        ></textarea>
      </div>
    </section>
  );
}

export default FacultyInput;
