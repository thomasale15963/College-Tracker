export const initialState = {
  // App Values to track
  appMode: null,
  researchModeFormProgress: 0,

  requirementsNumberCount: 0,
  remarkNumberCount: 0,

  facultyInformationValue: 0,
};

const reducer = (state, action) => {
  console.log("Debug Print", action);

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

    case "INCREASE_FACULTY_INPUT":
      return {
        ...state,
        facultyInformationValue: action.facultyInformationValue,
      };
    case "DECREASE_FACULTY_INPUT":
      return {
        ...state,
        facultyInformationValue: action.facultyInformationValue,
      };

    default:
      return state;
  }
};

export default reducer;
