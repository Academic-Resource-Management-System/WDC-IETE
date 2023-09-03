import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  useTheme,
} from "@mui/material";
import { AddressMap } from "./Map";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { tokens } from "../theme";
const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          </Grid>
        </Grid>
      </div>
      <div className="container mt-4 ">
        <AddressMap />
      </div>
    </>
  );
};

export default Contact;
