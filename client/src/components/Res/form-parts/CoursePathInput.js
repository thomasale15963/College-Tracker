import React from "react";

// Import helpers
import { advancedInfoRemoveErrors } from "../../../utils/helpers";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

function CoursePathInput({ count, removeFunction }) {
  return (
    <section className="course__path__container margin-top-18">
      <div className="container-row justify-space-between align-items-center">
        <h3 className="margin-bottom-16">Course Path {count}</h3>
        <div
          className="course__path__remove__button__container"
          onClick={removeFunction}
        >
          <ClearOutlinedIcon />
        </div>
      </div>
      <div className="container-row align-items-center justify-space-between">
        {/* Course Path Name Start */}
        <div className="container-col">
          <label htmlFor="CoursePathName" className="research__form__label">
            Course Path Name :
          </label>
          <input
            type="text"
            className="research__form__text__input__medium input__item"
            name="CoursePathName"
            placeholder="Cyber Security"
            id="CoursePathName"
            onChange={advancedInfoRemoveErrors}
          />
          <div id="CoursePathNameMessage">Invalid Course Path Name</div>
        </div>
        {/* Course Path Name End */}

        {/* Course Path Length Start */}
        <div className="container-col">
          <label htmlFor="CoursePathLength" className="research__form__label">
            Course Path Length :
          </label>
          <input
            type="number"
            className="research__form__text__input__medium input__item"
            name="CoursePathLength"
            placeholder="Cyber Security"
            id="CoursePathLength"
            onChange={advancedInfoRemoveErrors}
          />
          <div id="CoursePathLengthMessage">Invalid Course Path Length</div>
        </div>
        {/* Course Path Length End */}

        {/* Course Path Type Start */}
        <div className="container-col">
          <label htmlFor="CoursePathType" className="research__form__label">
            Course Path Type :
          </label>
          <select
            className="research__form__text__input__medium input__item"
            name="CoursePathType"
            placeholder="Cyber Security"
            id="CoursePathType"
            onChange={advancedInfoRemoveErrors}
          >
            <option value="Project">Project</option>
            <option value="Thesis">Thesis</option>
            <option value="Other">Other</option>
          </select>
          <div id="CoursePathTypeMessage">Invalid Course Path Type</div>
        </div>
        {/* Course Path Type End */}
      </div>

      <div className="container-row align-items-center justify-space-between margin-top-32">
        {/* Course Path PHD Start */}
        <div className="container-col">
          <label htmlFor="CoursePathPHD" className="research__form__label">
            Course Path PHD :
          </label>
          <select
            className="research__form__text__input__medium input__item"
            name="CoursePathPHD"
            placeholder="Yes"
            id="CoursePathPHD"
            onChange={advancedInfoRemoveErrors}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>
          <div id="CoursePathPHDMessage">Invalid Course Path PHD</div>
        </div>
        {/* Course Path PHD End */}

        {/* Course Path PHD Start */}
        <div className="container-col">
          <label htmlFor="CoursePathSchool" className="research__form__label">
            Course Path School PHD :
          </label>
          <select
            className="research__form__text__input__medium input__item"
            name="CoursePathSchool"
            placeholder="Yes"
            id="CoursePathSchool"
            onChange={advancedInfoRemoveErrors}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>
          <div id="CoursePathSchoolMessage">Invalid Course Path School</div>
        </div>
        {/* Course Path PHD End */}

        {/* Course Path Remark Start */}
        <div className="container-col">
          <label htmlFor="CoursePathRemark" className="research__form__label">
            Course Path Remark :
          </label>
          <input
            type="text"
            className="research__form__text__input__medium input__item"
            name="CoursePathRemark"
            id="CoursePathRemark"
            onChange={advancedInfoRemoveErrors}
          />
          <div id="CoursePathRemarkMessage">Invalid Course Path Remark</div>
        </div>
        {/* Course Path Remark End */}
      </div>
    </section>
  );
}

export default CoursePathInput;
