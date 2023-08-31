import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { IconButton, useTheme, InputBase } from "@mui/material";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMode } from "./theme";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import ExecutiveCommittee from "./components/ExecutiveCommittee";
import Membership from "./components/Membership";
import Home from "./components/Home";
import Footer from './components/Footer';

function App() {
  const [theme, colorMode] = useMode();
  //const colors = tokens(theme.palette.mode);

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

          <Box display="flex" flexDirection="column" flexGrow={1} py={2}>
            <Routes>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/committee" element={<ExecutiveCommittee />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>

          {/* Footer */}
          <Box
            bgcolor="white"
            boxShadow="0px -1px 5px rgba(0, 0, 0, 0.1)"
            p={2}
          >
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
