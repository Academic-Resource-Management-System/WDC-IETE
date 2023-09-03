import React from "react";
import { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import { AddressMap } from "./Map";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import { useLocation } from "react-router-dom";
import { tokens } from "../theme";
const Contact = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // Listen to changes in the pathname

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is below a certain threshold to trigger the fade-in effect
      if (window.scrollY > 100) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container-fluid  w-100 py-3 ">
        <Typography
          variant="h2"
          style={{
            overflowWrap: "break-word",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Center horizontally
            //    backgroundColor: "red",
            padding: "1rem",
          }}
        >
          Get In Touch With Us
        </Typography>
      </div>
      <div className="container  ">
        <Grid container spacing={2} className="my-2">
          <Grow in={true} timeout={1000}>
            <Grid
              item
              xs={12}
              md={6}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Paper
                className="px-2 py-3 my-2"
                style={{
                  width: "75%",
                  display: "flex",
                  alignItems: "center", // Center vertically
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 56, height: 56 }}
                  style={{
                    backgroundColor: "transparent",
                    color: colors.topbar[300],
                  }}
                >
                  <ImLocation
                    className="fs-1"
                    style={{ color: colors.topbar[200] }}
                  />
                </Avatar>
                <div className="ps-3 py-2">
                  {/* Use ImLocation icon */}
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    Location: IETE Chennai centre, No: 37, Conran Smith Road
                    Entrance Peters Road, Gopalapuram,Chennai, Tamil Nadu 600086
                  </Typography>
                </div>
              </Paper>
              <Paper
                className="px-2 py-3 my-2"
                style={{
                  width: "75%",
                  display: "flex",
                  alignItems: "center", // Center vertically
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 56, height: 56 }}
                  style={{
                    backgroundColor: "transparent",
                    color: colors.topbar[300],
                  }}
                >
                  <MdEmail
                    className="fs-1"
                    style={{ color: colors.topbar[200] }}
                  />
                </Avatar>
                <div className="ps-3 py-2">
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    Email: ietechennai@gmail.com
                  </Typography>
                </div>
              </Paper>
              <Paper
                className="px-2 py-3 my-2"
                style={{
                  width: "75%",
                  display: "flex",
                  alignItems: "center", // Center vertically
                  backgroundColor: colors.topbar[300],
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 56, height: 56 }}
                  style={{
                    backgroundColor: "transparent",
                    color: colors.topbar[300],
                  }}
                >
                  <BiSolidPhoneCall
                    className="fs-1"
                    style={{ color: colors.topbar[200] }}
                  />
                </Avatar>
                <div className="ps-3 py-2">
                  <Typography
                    variant="h5"
                    className="ps-3 py-2"
                    style={{ flex: 1, overflowWrap: "break-word" }}
                  >
                    Call: 044 2835 0773
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grow>

          <Grow in={true} timeout={2000}>
            <Grid item xs={12} md={6}>
              <TextField
                id="Name"
                label="Your Name"
                className=" w-100 mt-2"
                variant="filled"
              />
              <div className="d-md-flex">
                <TextField
                  id="email"
                  className="mt-2 me-md-1 w-100"
                  label="Your email address"
                  variant="filled"
                />

                <TextField
                  id="phone"
                  className="mt-2 ms-md-1 w-100"
                  label="Your Phone No"
                  variant="filled"
                />
              </div>
              <TextField
                id="subject"
                className="mt-2  w-100"
                label="Your Subject"
                variant="filled"
              />

              <TextField
                label="Write Your message..."
                className="mt-2 w-100"
                multiline
                rows={5}
                fullWidth
                variant="filled"
              />
              <Button
                variant="contained"
                style={{
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: colors.topbar[200],

                  width: "100%",
                }}
                className="my-3"
              >
                Submit
              </Button>
            </Grid>
          </Grow>
        </Grid>
      </div>{" "}
      <Grow in={true} timeout={3000}>
        <div className="container mt-4 ">
          <AddressMap />
        </div>
      </Grow>
    </>
  );
};

export default Contact;
