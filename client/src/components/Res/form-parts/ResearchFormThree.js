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

//
import { useNavigate } from "react-router-dom";

// Get Helpers
import { advancedInfoComplete } from "../../../utils/formEventFunctions";
import {
  getFromSessionStorage,
  saveToSessionStorage,
} from "../../../utils/helpers";
import axios from "axios";

function ResearchFormThree() {
  const navigate = useNavigate();
  const [
    {
      researchModeFormProgress,
      coursePathNumberCount,
      scholarshipNumberCount,
      facultyInformationCount,
      apiURI,
    },
    dispatch,
  ] = useStateProviderValue();
  const coursePathNumberCountArray = [...Array(coursePathNumberCount).keys()];
  const scholarshipCountArray = [...Array(scholarshipNumberCount).keys()];
  const facultyInformationCountArray = [
    ...Array(facultyInformationCount).keys(),
  ];

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
  // function addCampusImageInput() {}
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
  // function removeCampusImageInput() {}

  async function handleFinishButton() {
    const result = await advancedInfoComplete();
    const cachedData = JSON.parse(
      getFromSessionStorage("researchModeCacheData")
    );
    if (result) {
      const cachedDataUpdated = {
        ...cachedData,
        ...result,
      };
      saveToSessionStorage("researchModeCacheData", cachedDataUpdated);
      navigate("/loader");

      dispatch({
        type: "RESEARCH_MODE_FORM_NEXT",
        researchModeFormProgress: researchModeFormProgress + 1,
      });

      axios({
        method: "POST",
        url: `${apiURI}/university/add`,
        timeout: 10000,
        data: {
          information: cachedDataUpdated,
        },
      })
        .then((response) => {
          console.log(response);
          navigate("/");
        })
        .catch((e) => {
          console.log(e);
          navigate("/error");
        });
    }
  }
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

      <div className="container-col align-items-end">
        <div
          className="research__form__button__link"
          onClick={handleFinishButton}
        >
          Finish
        </div>
      </div>
    </section>
  );
}

export default ResearchFormThree;
