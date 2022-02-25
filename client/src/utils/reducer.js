export const initialState = {
  appMode: "Research",
};

const reducer = (state, action) => {
  console.log("Debug Print", action);

  switch (action.type) {
    case "CHANGE_APP_MODE":
      return {
        ...state,
        appMode: action.appMode,
      };

    default:
      return state;
  }
};

export default reducer;
