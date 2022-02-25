export const initialState = {
  // App Values to track
  appMode: null,
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
