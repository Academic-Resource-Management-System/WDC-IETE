import {
  CssBaseline,
  ThemeProvider,
  Box,
  colors,
  useTheme,
} from "@mui/material";
import { IconButton, InputBase } from "@mui/material";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { useMode } from "./theme";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import ExecutiveCommittee from "./components/ExecutiveCommittee";
import Membership from "./components/Membership";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { tokens } from "./theme";
import { color } from "@mui/system";

function App() {
  const [theme, colorMode] = useMode();
  const themes = useTheme();

  const colors = tokens(themes.palette.mode);

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
            //boxShadow="0px 1px 5px rgba(0, 0, 0, 0.1)"
          >
            <TopBar />
          </Box>

          <Box display="flex" flexDirection="column" flexGrow={1}>
            <Routes>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/committee" element={<ExecutiveCommittee />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>

          {/* Footer */}
          <Box

          //boxShadow="0px -1px 5px rgba(0, 0, 0, 0.1)"
          >
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
