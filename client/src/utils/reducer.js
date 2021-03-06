export const initialState = {
  apiURI: "https://college-tracker-api.herokuapp.com",
  // App Values to track
  appMode: null,
  researchModeFormProgress: 0,

  requirementsNumberCount: 0,
  remarkNumberCount: 0,
  coursePathNumberCount: 0,
  scholarshipNumberCount: 0,
  scholarshipRequirementCount: 0,
  facultyInformationCount: 0,

  facultyInformationValue: 0,
};

const reducer = (state, action) => {
  // console.log("Debug Print", action);

  switch (action.type) {
    case "CHANGE_APP_MODE":
      return {
        ...state,
        appMode: action.appMode,
      };

    case "RESEARCH_MODE_FORM_NEXT":
      return {
        ...state,
        researchModeFormProgress: action.researchModeFormProgress,
      };

    case "INCREASE_REQUIREMENT_INPUT":
      return {
        ...state,
        requirementsNumberCount: action.requirementsNumberCount,
      };

    case "DECREASE_REQUIREMENT_INPUT":
      return {
        ...state,
        requirementsNumberCount: action.requirementsNumberCount,
      };

    case "INCREASE_REMARK_INPUT":
      return {
        ...state,
        remarkNumberCount: action.remarkNumberCount,
      };

    case "DECREASE_REMARK_INPUT":
      return {
        ...state,
        remarkNumberCount: action.remarkNumberCount,
      };

    case "INCREASE_COURSE_PATH_INPUT":
      return {
        ...state,
        coursePathNumberCount: action.coursePathNumberCount,
      };

    case "DECREASE_COURSE_PATH_INPUT":
      return {
        ...state,
        coursePathNumberCount: action.coursePathNumberCount,
      };

    case "INCREASE_SCHOLARSHIP_INPUT":
      return {
        ...state,
        scholarshipNumberCount: action.scholarshipNumberCount,
      };

    case "DECREASE_SCHOLARSHIP_INPUT":
      return {
        ...state,
        scholarshipNumberCount: action.scholarshipNumberCount,
      };

    case "INCREASE_SCHOLARSHIP_REQUIREMENT_INPUT":
      return {
        ...state,
        scholarshipRequirementCount: action.scholarshipRequirementCount,
      };

    case "DECREASE_SCHOLARSHIP_REQUIREMENT_INPUT":
      return {
        ...state,
        scholarshipRequirementCount: action.scholarshipRequirementCount,
      };

    case "INCREASE_FACULTY_INPUT":
      return {
        ...state,
        facultyInformationCount: action.facultyInformationCount,
      };
    case "DECREASE_FACULTY_INPUT":
      return {
        ...state,
        facultyInformationCount: action.facultyInformationCount,
      };

    default:
      return state;
  }
};

export default reducer;
