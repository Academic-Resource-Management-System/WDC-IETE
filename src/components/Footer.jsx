import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  IconButton,
  useTheme,
  TextField,
  Button,
} from "@mui/material";
import { Nav } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { tokens } from "../theme";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div
      style={{
        backgroundColor: colors.topbar[400],
        color: colors.topbar[200],
      }}
    >
      <div className="container">
        <Grid
          container
          spacing={2}
          className="mt-2 "
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Grid item xs={12} md={4}>
            <Typography className="fs-3 text-start font-weight-bold">
              IETE Chennai
            </Typography>
            <Typography className="fs-5 py-2 font-weight-bold text-start">
              IETE Chennai centre, No: 37, Conran Smith Road Entrance Peters
              Road, Gopalapuram, Chennai, Tamil Nadu 600086
            </Typography>
            <Typography className="fs-5 py-2 font-weight-bold text-start">
              Phone: 044 2835 0773
            </Typography>
            <Typography className="fs-5 py-2 font-weight-bold text-start">
              Email: ietechennai@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className="d-flex justify-content-evenly">
            <Nav className="flex-column">
              <Typography
                className="fs-5 px-3"
                style={{ color: colors.topbar[200] }}
              >
                Useful Links
              </Typography>
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Home
                  </Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    About
                  </Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/committee">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Committee
                  </Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/events">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Events
                  </Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Contact
                  </Typography>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="flex-column">
              <Nav.Item>
                <Typography
                  className="px-3 fs-5 "
                  style={{ color: colors.topbar[200] }}
                >
                  Courses Offered
                </Typography>
                <Nav.Link as={Link} to="/course1/">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Course 1
                  </Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/course2/">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Course 2
                  </Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/course3/">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Course 3
                  </Typography>{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/course4/">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Course 4
                  </Typography>{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/course5/">
                  <Typography
                    className="fs-6"
                    style={{ color: colors.topbar[200] }}
                  >
                    Course 5
                  </Typography>{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>{" "}
          </Grid>

          <Grid item xs={12} md={4}>
            <div>
              <div className="mt-1">
                <Typography className="fs-3 text-center">
                  Join Our Newsletter
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    InputProps={{
                      style: {
                        borderRadius: "20px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontWeight: "bold",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className="ms-2 bg-primary"
                    style={{
                      borderRadius: "20px",
                      fontWeight: "bold",
                      textTransform: "none",
                      color: "white",
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography className="fs-3 text-center mt-5">
                  Social Media Links
                </Typography>
                <div className="d-flex justify-content-center">
                  <IconButton aria-label="LinkedIn">
                    <LinkedInIcon className="fs-1 text-primary" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <FacebookIcon className="fs-1 text-primary" />
                  </IconButton>
                  <IconButton aria-label="Instagram">
                    <InstagramIcon className="fs-1 text-info" />
                  </IconButton>
                  <IconButton aria-label="YouTube">
                    <YouTubeIcon className="fs-1 text-danger" color="red" />
                  </IconButton>{" "}
                  <IconButton aria-label="Twitter">
                    <TwitterIcon className="fs-1 text-primary" color="red" />
                  </IconButton>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <Typography className="fs-6 text-center py-4">
              © Copyright IETE Chennai. All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
