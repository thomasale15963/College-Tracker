import React from "react";

import "../../styles/parts/FacultyInput.css";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import { useStateProviderValue } from "../../utils/StateProvider";

function FacultyInput() {
  const [{ facultyInformationValue }, dispatch] = useStateProviderValue();
  function removeFacultyInput() {
    console.log("Testing Button");
    dispatch({
      type: "DECREASE_FACULTY_INPUT",
      facultyInformationValue:
        facultyInformationValue > 0 ? facultyInformationValue - 1 : 0,
    });
  }
  return (
    <section className="faulty__input__main">
      <div className="faculty__input__container">
        <div className="faculty__image__name__container">
          <img
            src="./assets/img/test_image.png"
            alt=""
            className="faculty__input__image"
          />
          <div>
            <div className="faculty__input__msc__container-col">
              <label htmlFor="" className="faculty__input__label">
                Name :
              </label>
              <input type="text" className="input__item__medium input__item" />
            </div>

            <div className="faculty__input__msc__container-col">
              <label htmlFor="" className="faculty__input__label">
                Email :
              </label>
              <input type="text" className="input__item__medium input__item" />
            </div>
          </div>
        </div>

        <div className="faculty__input__msc__container-row">
          <div className="faculty__input__msc__link__input__container">
            <label htmlFor="" className="faculty__input__label">
              Educational Status :
            </label>
            <input type="text" className="input__item" />
          </div>
          <div className="faculty__input__msc__link__input__container">
            <label htmlFor="" className="faculty__input__label">
              Link :
            </label>
            <input type="text" className="input__item" />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="faculty__input__msc__container-col">
          <label htmlFor="" className="faculty__input__label">
            Description :
          </label>
          <textarea
            name="FacultyDescription"
            id="FacultyDescription"
            className="input__text__area"
            res
          />
        </div>
      </div>
      <ClearOutlinedIcon
        className="faculty__input__delete__button"
        onClick={removeFacultyInput}
      />
    </section>
  );
}

export default FacultyInput;
