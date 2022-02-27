import React from "react";

// IMport components
import CoursePathInput from "./CoursePathInput";

// Import Global State Provider
import { useStateProviderValue } from "../../../utils/StateProvider";

function ResearchFormThree() {
  const [{ coursePathNumberCount }] = useStateProviderValue();
  const coursePathNumberCountArray = [...Array(coursePathNumberCount).keys()];

  function addCoursePathInput() {}
  function addScholarshipInput() {}
  function addFacultyInput() {}
  function addCampusImageInput() {}
  function removeCoursePathInput() {}
  function removeScholarshipInput() {}
  function removeFacultyInput() {}
  function removeCampusImageInput() {}

  function handleFinishButton() {}
  return (
    <section className="research__form__three__container">
      <h1 className="research__form__heading__title">
        3. Advanced Information
      </h1>

      <div className="container-col">
        {coursePathNumberCountArray.map((item) => (
          <CoursePathInput
            key={item}
            removeFunction={removeCoursePathInput}
            count={item + 1}
          />
        ))}
      </div>
    </section>
  );
}

export default ResearchFormThree;
