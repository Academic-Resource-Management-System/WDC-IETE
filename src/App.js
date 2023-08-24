import "./App.css";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { IconButton, useTheme, InputBase } from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMode } from "./theme";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/action";

function App() {
  const [theme, colorMode] = useMode();
  const mode = useSelector((state) => state.mode.currentMode);
  const dispatch = useDispatch();
  const handleMode = (event) => {
    if (mode === "dark") {
      dispatch(toggleTheme("light"));
    } else {
      dispatch(toggleTheme("dark"));
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <Box display="flex" flexDirection="column" minHeight="100vh">
          {/* Header */}
          <Box
            position="sticky"
            top={0}
            zIndex={1000}
            bgcolor="white"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.1)"
          >
            This is the header.
            <IconButton
              className="mx-2 text-light"
              sx={{ width: 45, height: 45 }}
              onClick={handleMode}
            >
              {mode === "dark" ? <NightlightIcon /> : <WbSunnyIcon />}
            </IconButton>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            flexGrow={1}
            bgcolor="#f0f0f0"
            p={3}
          >
            This is the body.
          </Box>

          {/* Footer */}
          <Box
            bgcolor="white"
            boxShadow="0px -1px 5px rgba(0, 0, 0, 0.1)"
            p={2}
          >
            This is the footer.
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
