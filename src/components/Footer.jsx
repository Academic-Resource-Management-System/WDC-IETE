import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, IconButton, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { AiFillHome, AiOutlineTeam } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdEmojiEvents } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Nav } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { tokens } from "../theme";
import { color } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
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
          className="my-2 "
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Grid item xs={12} md={4}>
            <Typography className="fs-3 text-start font-weight-bold">
              IETE Chennai
            </Typography>
            <Typography className="fs-5 py-2  font-weight-bold text-start">
              IETE Chennai centre, No: 37, Conran Smith Road Entrance Peters
              Road, Gopalapuram,Chennai, Tamil Nadu 600086
            </Typography>
            <Typography className="fs-5 py-2 font-weight-bold text-start">
              Phone: 044 2835 0773
            </Typography>
            <Typography className="fs-5 py-2 font-weight-bold  text-start">
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
                  className="fs-5 px-3"
                  style={{ color: colors.topbar[200] }}
                >
                  Courses Offered
                </Typography>
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
                  </Typography>{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/events">
                  <Typography style={{ color: colors.topbar[200] }}>
                    Events
                  </Typography>{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">
                  <Typography style={{ color: colors.topbar[200] }}>
                    Contact
                  </Typography>{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Grid>

          <Grid item xs={12} md={4}>
            <div>
              {/* <div>
                <Typography className="fs-3 text-start">
                  Join Our Newsletter
                </Typography> 
    </div>*/}
              <div>
                <Typography className="fs-3 text-center">
                  Social Media Links
                </Typography>
                <div className="d-flex justify-content-center">
                  <IconButton aria-label="Facebook">
                    <LinkedInIcon className="fs-1 text-primary" />
                  </IconButton>
                  <IconButton aria-label="Facebook ">
                    <FacebookIcon className="fs-1 text-primary" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <InstagramIcon className="fs-1 text-info" />
                  </IconButton>
                  <IconButton aria-label="Facebook">
                    <YouTubeIcon className="fs-1 text-danger" color="red" />
                  </IconButton>{" "}
                  <IconButton aria-label="Facebook">
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
