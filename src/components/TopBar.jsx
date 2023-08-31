import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {
  IconButton,
  useTheme,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/action";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import img from "../android-chrome-192x192.png";
import img1 from "../DD2.png";
import { Link } from "react-router-dom";
import { tokens } from "../theme";

const pages = [
  "Home",
  "About",
  "Events",
  "Executive Committee",
  "Membership",
  "chencon",
  "Chenlink News Letter",
  "Contact",
];
const pagesLink = [
  "/",
  "about",
  "events",
  "committee",
  "membership",
  "chencon",
  "Chenlink",
  "contact",
];
function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.currentMode);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleMode = (event) => {
    if (mode === "dark") {
      dispatch(toggleTheme("light"));
    } else {
      dispatch(toggleTheme("dark"));
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };
  console.log(colors.topbar[100]);
  return (
    <AppBar position="static" style={{ backgroundColor: colors.topbar[100] }}>
      <Container className="py-md-3" maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="Cindy Baker"
            src={img1}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              width: 56,
              height: 56,
            }}
          />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              //  letterSpacing: ".1rem",
              color: colors.topbar[200],
              width: "200px",
              textDecoration: "none",
              flex: 1,
              overflowWrap: "break-word",
            }}
          >
            The Institution of Electronics and Telecommunication Engineers
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {pages.map((page, i) => (
                    <Link to={`${pagesLink[i]}`}>
                      <ListItem button key={page}>
                        <ListItemText>
                          <Typography>{page}</Typography>
                        </ListItemText>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </div>
            </Drawer>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: colors.topbar[200],
              textDecoration: "none",
            }}
          >
            IETE
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page, i) => (
              <Link to={`${pagesLink[i]}`}>
                <Button
                  key={page}
                  //   onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  <Typography>{page}</Typography>
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Mode">
              <IconButton
                className="mx-2 text-light"
                sx={{ width: 45, height: 45, color: colors.topbar[200] }}
                onClick={handleMode}
              >
                {mode === "dark" ? (
                  <NightlightIcon style={{ color: colors.topbar[200] }} />
                ) : (
                  <WbSunnyIcon style={{ color: colors.topbar[200] }} />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;
