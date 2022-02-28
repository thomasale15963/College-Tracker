import React from "react";

// IMport components
import CoursePathInput from "./CoursePathInput";

// Import Style
import "../../../styles/Res/Research.css";

// Import Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

// Import Global State Provider
import { useStateProviderValue } from "../../../utils/StateProvider";
import ScholarshipInput from "./ScholarshipInput";
import FacultyInput from "./FacultyInput";

function ResearchFormThree() {
  const [
    { coursePathNumberCount, scholarshipNumberCount, facultyInformationCount },
    dispatch,
  ] = useStateProviderValue();
  const coursePathNumberCountArray = [...Array(coursePathNumberCount).keys()];
  const scholarshipCountArray = [...Array(scholarshipNumberCount).keys()];
  const facultyInformationCountArray = [
    ...Array(facultyInformationCount).keys(),
  ];

  console.log(scholarshipCountArray);

  function addCoursePathInput() {
    dispatch({
      type: "INCREASE_COURSE_PATH_INPUT",
      coursePathNumberCount: coursePathNumberCount + 1,
    });
  }
  function addScholarshipInput() {
    dispatch({
      type: "INCREASE_SCHOLARSHIP_INPUT",
      scholarshipNumberCount: scholarshipNumberCount + 1,
    });
  }
  function addFacultyInput() {
    dispatch({
      type: "INCREASE_FACULTY_INPUT",
      facultyInformationCount: facultyInformationCount + 1,
    });
  }
  function addCampusImageInput() {}
  function removeCoursePathInput() {
    dispatch({
      type: "INCREASE_COURSE_PATH_INPUT",
      coursePathNumberCount:
        coursePathNumberCount > 0 ? coursePathNumberCount - 1 : 0,
    });
  }
  function removeScholarshipInput() {
    dispatch({
      type: "DECREASE_SCHOLARSHIP_INPUT",
      scholarshipNumberCount:
        scholarshipNumberCount > 0 ? scholarshipNumberCount - 1 : 0,
    });
  }
  function removeFacultyInput() {
    dispatch({
      type: "DECREASE_FACULTY_INPUT",

      facultyInformationCount:
        facultyInformationCount > 0 ? facultyInformationCount - 1 : 0,
    });
  }
  function removeCampusImageInput() {}

  function handleFinishButton() {}
  return (
    <section className="research__form__three__container">
      <h1 className="research__form__heading__title">
        3. Advanced Information
      </h1>
      {/* Course Path Input Start */}
      <div className="container-col">
        {coursePathNumberCountArray.map((item) => (
          <CoursePathInput
            key={item}
            removeFunction={removeCoursePathInput}
            count={item + 1}
          />
        ))}
      </div>

      {/* Add More Button */}
      <div
        className="container-row align-items-center research__form__two__requirement__add__button__container margin-top-50"
        onClick={addCoursePathInput}
      >
        <AddOutlinedIcon />
        <div>Add New Course Path</div>
      </div>

      {/* Course Path Input End */}

      {/* Scholarship Input Start */}
      {scholarshipCountArray.map((item) => (
        <ScholarshipInput
          key={item}
          count={item + 1}
          removeFunction={removeScholarshipInput}
        />
      ))}
      {/* <ScholarshipInput /> */}

      {/* Add More Button */}
      <div
        className="container-row align-items-center research__form__two__requirement__add__button__container margin-top-50"
        onClick={addScholarshipInput}
      >
        <AddOutlinedIcon />
        <div>Add New Scholarship</div>
      </div>
      {/* End */}

      {/* Faculty Input Start */}
      {facultyInformationCountArray.map((item) => (
        <FacultyInput
          key={item}
          count={item + 1}
          removeFunction={removeFacultyInput}
        />
      ))}

      {/* Add More Button */}
      <div
        className="container-row align-items-center research__form__two__requirement__add__button__container margin-top-50"
        onClick={addFacultyInput}
      >
        <AddOutlinedIcon />
        <div>Add New Faculty</div>
      </div>
      {/* End */}
    </section>
  );
}

export default ResearchFormThree;
