import { loadModeState } from "./dataStorage";

const initialState = loadModeState() || {
  currentMode: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        currentMode: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
