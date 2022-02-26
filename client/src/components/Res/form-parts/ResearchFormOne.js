import React from "react";

import "../../../styles/Res/form-parts/ResearchFormOne.css";

function ResearchFormOne() {
  return (
    <section className="research__form__one__container">
      <h1 className="research__form__heading__title">1. Basic Information</h1>
      <div className="container-row align-items-end image__name__container ">
        {/* Image Input Start */}
        <img
          src="./assets/img/test_image.png"
          alt="University"
          className="research__form__image"
        />
        {/* Image Input End */}

        {/* University Name and Rank Start */}
        <div className="container-col margin-left-16">
          {/* University Name Input Start */}
          <div className="container-col align-items-start ">
            <label htmlFor="UniversityName" className="research__form__label">
              University Name : <span>*</span>
            </label>

            <input
              type="text"
              className="research__form__text__input__medium input__item"
              name="UniversityName"
              placeholder="Addis Ababa University"
            />
            <div
              className="research__form__message__display"
              id="UniversityNameMessage"
            >
              Message Goes Here
            </div>
          </div>
          {/* University Name Input End */}

          {/* University Rank Input Start */}
          <div className="container-col align-items-start margin-top-16">
            <label htmlFor="UniversityRank" className="research__form__label">
              University Rank : <span>*</span>
            </label>

            <input
              type="number"
              className="research__form__text__input__medium input__item"
              name="UniversityRank"
              placeholder="120"
            />
            <div
              className="research__form__message__display"
              id="UniversityRankMessage"
            >
              Message Goes Here
            </div>
          </div>
          {/* University Rank Input End */}
        </div>
        {/* University Name and Rank Start */}
      </div>
      {/* University Location Start */}
      <div className="container-row align-items-center justify-space-between margin-top-32">
        {/* University Country Start */}
        <div className="container-col">
          <label htmlFor="UniversityCountry" className="research__form__label">
            Country : <span>*</span>
          </label>
          <select
            name="UniversityCountry"
            id="UniversityCountry"
            className="research__form__text__input__small input__item"
            defaultValue="Ethiopia"
          >
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="England">England</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Italy">Italy</option>
            <option value="Norway">Norway</option>
            <option value="Sweden">Sweden</option>
            <option value="Denmark">Denmark</option>
            <option value="Finland">Finland</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Ethiopia">Ethiopia</option>
          </select>
          <div
            className="research__form__message__display"
            id="UniversityCountryMessage"
          >
            Message Goes Here
          </div>
        </div>
        {/* University Country End */}

        {/* University State Start */}
        <div className="container-col">
          <label htmlFor="UniversityState" className="research__form__label">
            State :
          </label>
          <input
            type="text"
            className="research__form__text__input__small input__item"
            name="UniversityState"
            placeholder="Addis Ababa"
          />
          <div
            className="research__form__message__display"
            id="UniversityStateMessage"
          >
            Message Goes Here
          </div>
        </div>
        {/* University State End */}

        {/* University City Start */}
        <div className="container-col">
          <label htmlFor="UniversityCity" className="research__form__label">
            City : <span>*</span>
          </label>
          <input
            type="text"
            className="research__form__text__input__small input__item"
            name="UniversityCity"
            placeholder="Addis Ababa"
          />
          <div
            className="research__form__message__display"
            id="UniversityCityMessage"
          >
            Message Goes Here
          </div>
        </div>
        {/* University City End */}
      </div>
      {/* University Location End */}

      {/* University Link & Email Start */}
      <div className="container-row align-items-center justify-space-between margin-top-32">
        {/* University Link Start */}
        <div className="container-col">
          <label htmlFor="UniversityLink" className="research__form__label">
            University Link : <span>*</span>
          </label>
          <input
            type="text"
            name="UniversityLink"
            className="research__form__text__input__small input__item"
            placeholder="http://www.aau.edu.et/"
          />
          <div
            className="research__form__message__display"
            id="UniversityLinkMessage"
          >
            Message Goes Here
          </div>
        </div>
        {/* University Link End */}

        {/* Application Link Start */}
        <div className="container-col">
          <label htmlFor="ApplicationLink" className="research__form__label">
            Application Link : <span>*</span>
          </label>
          <input
            type="text"
            className="research__form__text__input__small input__item"
            name="ApplicationLink"
            placeholder="http://www.aait.edu.et/"
          />
          <div
            className="research__form__message__display"
            id="ApplicationLinkMessage"
          >
            Message Goes Here
          </div>
        </div>
        {/* Application Link End */}

        {/* Application Email Start */}
        <div className="container-col">
          <label htmlFor="ApplicationEmail" className="research__form__label">
            Application Email : <span>*</span>
          </label>
          <input
            type="email"
            className="research__form__text__input__small input__item"
            name="ApplicationEmail"
            placeholder="gradadmission@aait.edu"
          />
          <div
            className="research__form__message__display"
            id="ApplicationEmailMessage"
          >
            Message Goes Here
          </div>
        </div>
        {/* University City End */}
      </div>
      {/* University link & Email End */}

      <div className="container-col align-items-end">
        <div className="research__form__button__link">Next</div>
      </div>
    </section>
  );
}

export default ResearchFormOne;