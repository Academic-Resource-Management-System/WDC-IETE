export const saveModeState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('mode', serializedState);
    } catch (err) {
      // Handle errors
    }
  };
  
  export const loadModeState = () => {
    try {
      const serializedState = localStorage.getItem('mode');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  