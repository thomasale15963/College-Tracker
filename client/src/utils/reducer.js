export const initialState = {
  // App Values to track
  appMode: null,
  researchModeFormProgress: 0,
  researchModeFormInputs: {},
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
        researchModeFormInputs: action.researchModeFormInputs,
        researchModeFormProgress: action.researchModeFormProgress,
      };

    case "INCREASE_FACULTY_INPUT":
      console.log(initialState.facultyInformationValue + 1);
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
