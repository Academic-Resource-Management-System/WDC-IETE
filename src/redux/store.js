import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { toggleTheme } from "./action";
import themeReducer from "./themeReducer";
import { loadModeState } from "./dataStorage";
import { saveModeState } from "./dataStorage";

const rootReducer = combineReducers({
  mode: themeReducer,
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

const modeState = loadModeState();
if (modeState) {
  store.dispatch(toggleTheme(modeState.currentMode));
}

store.subscribe(() => {
  const { currentMode } = store.getState().mode;
  const modeState = { currentMode };
  saveModeState(modeState);
});

export default store;
